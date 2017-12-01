# PiNet
## A remote intranet platform using Raspberry Pi

## Darwin Web Standards October 2017



### Thanks
* Dash Media
* Charles Darwin University



### The Problem
![Warnet users](http://warnetbitnet.com/wp-content/uploads/2013/12/warnet_bitnet5_1.jpg)



### Raspberry Pi

Note:
* The Raspberry Pi is a small, affordable computer with low power requirements.

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

Note:
* Raspbian is a full-featured Debian based Linux distribution for the raspberry Pi.
* It uses the PIXEL desktop environment (an Xwindows desktop environment optimised for the raspberry pi).
* since we are running a headless web server we have chosen to use the cut-back Raspbian Lite distribution to save space. If you’re more comfortable with a GUI by all means use the full Rasbian version.
* This gives us a full linux distribution with a huge range of software available in existing apt repositories or dpg binaries.
* If a binary is not available it is not particularly difficult to compile one from source.


### Installing Raspbian
* Download [rasbian image](https://www.raspberrypi.org/downloads/raspbian/)
* Write image to SD card
 * Windows: use an application like [win32 image writer](https://launchpad.net/win32-image-writer)
 * OSX or Linux use DD
 `sudo dd bs=1M if=debian6-19-04-2012.img of=/dev/sdx`

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
`wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf`

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
`DAEMON_CONF="/etc/hostapd/hostapd.conf"`

* Now restart the pi and the AP should be available
