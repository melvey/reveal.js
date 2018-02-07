# HTTPS
## What is HTTP and why does it matter



### HTTP
![HTTP traffic](images/http_traffic.png)

Note:
* Traffic is sent from the user to the server in plaintext
* This means the traffic can be read by anyone along the wire
* The URLs you visit, the page content and everything you enter can be read
* This includes usernames and passwords



### HTTPS
![HTTPS traffic](images/https_traffic.png)

Note:
* Traffic is encrypted
* Nobody except the user and the server can read what is sent and received
* important for both privacy and security



### What is encryption

Note:
* Uses SSL (secure socket layer) or TLS (Transport Layer Security)
* These are asymmetric public key infrastructure (PKI) encryption
* Use two keys to encrypt
 * public key can only be decrypted by private key
 * private key can only be decrypted by public key
* We can use this to ensure only the correct recipient recieves our message
* It also can ensure that we know who the message came from. I can't pretend to be facebook



### HTTPS Certificates

Note:
* This is what the website sends you to encrypt traffic
* contains the server's public key
* We use the public key to create a shared secret key
* it should be signed (created) by a trusted authority


### What's the deal with the green bar?



### Do I need HTTPS for *everything*?
