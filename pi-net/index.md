# PiNet
## A remote intranet platform using Raspberry Pi

## Darwin Web Standards October 2017



### Thanks
* Dash Media
* Charles Darwin University



### The Problem
![Remove petrol station](remote_filling_station.jpg)

CCBy: [FreeAussieStock](http://freeaussiestock.com/free/Northern_Territory/slides/remote_filling_station.htm)



### Raspberry Pi
* The Raspberry Pi is a small, affordable computer with low power requirements.
![Raspberry Pi](pi3bp.jpg)


## Raspberry Pi 3 Model B
* Costs $50 for board only, $100 for full starter kit
* 1.2Ghz ARM processor
* 1 Gb RAM
* Onboard WiFi
* Micro SD for storage

Note:
* Older models or smaller and cheaper zero model also sufficent for small numbers of users
* I’m not sure about the access point resource requirements but a web server only serving to people within wireless range really doesn’t require many resources.



### Raspbian lite
![Raspbian logo](raspbian-logo.png)
* Raspbian is a full-featured Debian based Linux distribution for the raspberry Pi.
* Huge range of software available in existing apt repositories or dpg binaries.

Note:
* It uses the PIXEL desktop environment (an Xwindows desktop environment optimised for the raspberry pi).
* since we are running a headless web server we have chosen to use the cut-back Raspbian Lite distribution to save space. If you’re more comfortable with a GUI by all means use the full Rasbian version.
* If a binary is not available it is not particularly difficult to compile one from source.


### Installing Raspbian
* Download [rasbian image](https://www.raspberrypi.org/downloads/raspbian/)
* Write image to SD card
 * Windows: use an application like [win32 image writer](https://launchpad.net/win32-image-writer)
 * OSX or Linux use DD
 ```
 sudo dd bs=1M if=debian6-19-04-2012.img of=/dev/sdx
 ```

Note:
* If using dd change sdx to your disk and ensure it is unmounted first



### Broadcast access point
* Setup WiFi access point
`sudo apt-get install hostapd dnsmasq`

Note:
* Once we get our Pi up and running we need to make sure people can access it.
* To do this we are going to broadcast a wireless access point.
* If your users are going to access the Pi from an existing network you can skip this step. 
* To create our access point we are going to use hostapd. We are also going to provide DHCP and DNS services using dnsmasq. These are both available from apt.


### Set static IP to wireless interface
* prevent dhcp daemon from assigning an automatic IP to the wireless interface*:
Add the following line to the top of /etc/dhcpcd.conf
    `denyinterfaces wlan0`


### Set static IP to wireless interface
* Assign static IP to wireless interface
    Edit wlan section of /etc/network/interfaces to reflect below
```
allow-hotplug wlan0
iface wlan0 inet static
	address 172.24.1.1
	netmask 255.255.255.0
	network 172.24.1.0
	broadcast 172.24.1.255
```

* Disable the following line by putting a # in front
```
wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
```


### Set static IP to wireless interface
* Restart network
```
sudo service dhcpd restart
sudo ifdown wlan0; sudo ifup wlan0;
```
You can check your configuration by running ifconfig

Note:
*We’re assuming your wireless interface is on wlan0.
*This is unlikely to change as the hardware and linux distribution should be consistent but you can check by running ifconfig to see if wlan0 appears in the available interfaces.
*If it has a different name replace all instances of wlan0 with your wireless interface.


### Setup HostAPD
Write the following configuration to /etc/hostapd/hostapd.conf
```
# This is the name of the WiFi interface we configured above
interface=wlan0
# Use the nl80211 driver with the brcmfmac driver
driver=nl80211
# This is the name of the network
ssid=Pi3-AP
# Use the 2.4GHz band
hw_mode=g
# Use channel 6
channel=6
# Enable 802.11n
ieee80211n=1
# Enable WMM
wmm_enabled=1
# Enable 40MHz channels with 20ns guard interval
ht_capab=[HT40][SHORT-GI-20][
# Accept all MAC addresses
macaddr_acl=0
# Use WPA authentication
auth_algs=1
# Require clients to know the network name
ignore_broadcast_ssid=0
# Use WPA2
wpa=2
# Use a pre-shared key
wpa_key_mgmt=WPA-PSK
# The network passphrase
wpa_passphrase=raspberry
# Use AES, instead of TKIP
rsn_pairwise=CCMP
```


### Setup HostAPD
* Edit /etc/default/hostapd to contain the following line
```
DAEMON_CONF="/etc/hostapd/hostapd.conf"
```

* Now restart the pi and the AP should be available


### Setup dnsmasq
* Edit `/etc/dnsmasq.conf` to refect the following
```
interface=wlan0 # Use interface wlan0
listen-address=172.24.1.1 # Explicitly specify the address to listen on
bind-interfaces # Bind to the interface to make sure we aren't sending things elsewhere
server=8.8.8.8 # Forward DNS requests to Google DNS
domain-needed # Don't forward short names
bogus-priv # Never forward addresses in the non-routed address spaces.
dhcp-range=172.24.1.50,172.24.
address=/pi-net.local/172.24.1.1
```

Note:
* The default dnsmasq config has some great configuration details but is much more than we need. You can back it up if you want to refer to it later
* sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig



### Ethernet interface
We have only configured the network to be accessable on the wireless network. We have two options with the ethernet interface:
* Forward traffic between wlan and ethernet
* Broadcast a second network on ethernet


### Forward traffic from the wlan to ethernet
* Enable IP forwarding in /etc/sysctl.conf
```
net.ipv4.ip_forward=1
```


### Forward traffic from the wlan to ethernet
Configure network forwarding between our wlan0 and eth0 interfaces by running the following
```
	sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
	sudo iptables -A FORWARD -i eth0 -o wlan0 -m state --state RELATED,ESTABLISHED -j ACCEPT
	sudo iptables -A FORWARD -i wlan0 -o eth0 -j ACCEPT
	Save these IP tables rules to be loaded on startup
	sudo sh -c "iptables-save > /etc/iptables.ipv4.nat
```
* Add the following to /etc/rc.local above exit 0
```
	iptables-restore < /etc/iptables.ipv4.nat
```

* Restart


### Expose another network on ethernet
* Set static IP and record second dnsmasq configuration for eth



### Install a web server
* Install apache
```
sudo apt-get install apache2
```

OR

* Install nginx
```
sudo apt-get install nginx
```



### KA-Lite
* KA-Lite is a portable installation of Kahn Academy
* Pre-configured raspberry pi image available
* Or just extract folder to web directory and open in browser

Note:
* Need to install language pack
* Videos can take some time to download
* All videos are about 35Gb in size (you need space on SD)



### Node applications
* We used this for an accounting course
* Doesn't require a static web server
 * But it is better to use one to server static assets



### Security
* Server is _NOT_ secure
	* Physical access to the server means it is easily compromised
	* Difficult to patch if offline
* Do not store sensitive information on server


### Security - SSL
* SSL is still valuable
	* Prevent password sniffing
	* Can use service workers
* The certificate is easily stolen
	* Use a unique subdomain and do not use the certificate elsewhere



### Next steps - Synchronising online
* If a slow or unreliable network is available
* Cron job to synchronise data from local databases to remote web API
* Web API prone to attack
	* A registration service may be required to idenitfy Pi



### Applications
* Education
* Data collection
* Communication platform. e.g. chat service
* CDN
* Many more options yet unconsidered

Note:
* Cheap hardware and strong developer community



### No internet doesn't have to mean no intranet
