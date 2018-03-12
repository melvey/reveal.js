<!-- .slide: data-background-image="images/lego-568042_1280.jpg" -->
# WebVR and AFrame


## What is WebVR
* API for VR headsets and controllers
* Still experimental
* Developed by Mozilla
* [Not a lot of support](https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API)


## What is WebVR
* Single API for all supported headsets
* `Navigator.getVRDisplays() ` will get connected headsets


## What headsets do people use
* Headset sales hit 1 million in Q3 2017
![VR headset sales Q3 2017](https://www.canalys.com/static/Capture_2.JPG)
[Source: https://www.canalys.com/newsroom/media-alert-virtual-reality-headset-shipments-top-1-million-first-time](https://www.canalys.com/newsroom/media-alert-virtual-reality-headset-shipments-top-1-million-first-time)


## What headsets do people use
<div class="chart-container chart-small">
	<div id="vr-headset-sales"></div>
</div>

Note:
"Canalys defines a virtual reality headset as a device with a display designed to be worn on the face that immerses the viewer in a virtual world, and it excludes simple viewers, such as Samsung’s Gear VR and Google’s Daydream View"

What?? <!-- .element class="fragment" data-fragment="1" -->


### Ok. What did people use in 2016?
<div class="chart-container chart-small">
	<div id="vr-headset-2016"></div>
</div>

Note:
from http://www.hypergridbusiness.com/2016/11/report-98-of-vr-headsets-sold-this-year-are-for-mobile-phones/


### So?
* Advanced VR headsets are coming
* But most people are on cardboard or gear VR
* Can we develop for all of them?



## AFrame
* Handles all major VR headsets
* Can handle controllers and position tracking
* Also works on cardboard
* Can even work with no headset


### Using AFrame
* Import the JS library
* Create a 3D scene using HTML markup


#### Inspector
* Press `<ctrl> + <alt> + i` to open the inspector
* Can change properties on the fly
* Copy settings to clipboard
	* It does not save


## Components
* Import pre-built or custom aframe components
* Lots of cool components in [The registry](https://aframe.io/aframe-registry/)


### Position and rotation
* Vector 3 for x, y, z
```
<a-box position="0 1 -2" rotation="45 45 45"></a-box"
```


### Materials
* Apply a texture using src
```js
<a-sky src="images/space.jpg"></a-sky>
```
* Set properties using [material component](https://aframe.io/docs/0.8.0/components/material.html)
```js
<a-sphere material="shader: standard; color: #ddf"></a-sphere>
```

Note:
Make a skydome


### Animation

Note: Make the sun spin


### Models
* Best support for gltf
* Can use obj and collada
* Animation is not yet properly supported
* Can import from web sources with https://dist.3d.io/3dio-js/1.1.x/3dio.min.js

Note: Add satelite


### Lighting
* [Light component](https://aframe.io/docs/0.8.0/components/light.html)
```js
	<a-entity light="type: directional; color: #FFF; intensity: 0.6" position="-0.5 1 1"></a-entity>
```

Note:
Add lighting from sun if possible


### Controls
* [Hand controls](https://aframe.io/docs/0.5.0/components/hand-controls.html)
* Can hook into mouse events


## Custom components
* Write with javascript
* Add entities and components
* Access using existing DOM functions
* Can tap into threejs for more complex components


## AR.js
* Has an aframe component
* Super cool!
* Uses pattern markers
