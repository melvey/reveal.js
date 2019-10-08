<!-- .slide: data-background-image="images/1024px-Samsung_Virtual_Reality_MWC_2016_Press_Conference.jpg" -->
# WebVR and AFrame


<!-- .slide: data-background-image="images/vr-2237467_1280.png" -->
## What is WebVR
* API for VR headsets and controllers
* Still experimental
* Developed by Mozilla
* [Not a lot of support](https://developer.mozilla.org/en-US/docs/Web/API/WebVR_API)


<!-- .slide: data-background-image="images/vr-2237467_1280.png" -->
## What is WebVR
* Single API for all supported headsets
* `Navigator.getVRDisplays() ` will get connected headsets


<!-- .slide: data-background-image="images/woman-and-virtual-reality.jpg" -->
## What headsets do people use
* Headset sales hit 1 million in Q3 2017
![VR headset sales Q3 2017](https://www.canalys.com/static/Capture_2.JPG)
[Source: https://www.canalys.com/newsroom/media-alert-virtual-reality-headset-shipments-top-1-million-first-time](https://www.canalys.com/newsroom/media-alert-virtual-reality-headset-shipments-top-1-million-first-time)


<!-- .slide: data-background-image="images/woman-and-virtual-reality.jpg" -->
## What headsets do people use
"Canalys defines a virtual reality headset as a device with a display designed to be worn on the face that immerses the viewer in a virtual world, and it excludes simple viewers, such as Samsung's Gear VR and Google's Daydream View"

[Canalys](https://www.canalys.com/newsroom/media-alert-virtual-reality-headset-shipments-top-1-million-first-time)

What?? <!-- .element class="fragment" data-fragment="1" -->


<!-- .slide: data-background-image="images/MaxPixel.freegreatpicture.com-Cardboard-Virtual-Reality-Google-3d-Vr-2202220.jpg" -->
### Ok. What did people use in 2016?
![VR headset sales 2016](https://www.hypergridbusiness.com/wp-content/uploads/2016/11/VR-headsets-sold-in-2016-without-Cardboard-SuperData-700x305.jpg)

[Source: http://www.hypergridbusiness.com/2016/11/report-98-of-vr-headsets-sold-this-year-are-for-mobile-phones](http://www.hypergridbusiness.com/2016/11/report-98-of-vr-headsets-sold-this-year-are-for-mobile-phones)


<!-- .slide: data-background-image="images/MaxPixel.freegreatpicture.com-Cardboard-Virtual-Reality-Google-3d-Vr-2202220.jpg" -->
### Ok. What did people use in 2016?
![Full VR headset sales 2016](http://www.hypergridbusiness.com/wp-content/uploads/2016/11/VR-headsets-sold-in-2016-SuperData.jpg)

[Source: http://www.hypergridbusiness.com/2016/11/report-98-of-vr-headsets-sold-this-year-are-for-mobile-phones](http://www.hypergridbusiness.com/2016/11/report-98-of-vr-headsets-sold-this-year-are-for-mobile-phones)


<!-- .slide: data-background-image="images/MaxPixel.freegreatpicture.com-Cardboard-Virtual-Reality-Google-3d-Vr-2202220.jpg" -->
### So?
* Advanced VR headsets are coming
* But most people are on cardboard or gear VR
* Can we develop for all of them?



<!-- .slide: data-background-image="https://upload.wikimedia.org/wikipedia/commons/9/92/A-Frame_logo.png" -->
## AFrame
* Handles all major VR headsets
* Can handle controllers and position tracking
* Also works on cardboard
* Can even work with no headset


<!-- .slide: data-background-image="images/pexels-photo-270404.jpeg" data-state="fade-bg"-->
### Using AFrame
* Import the JS library
* Create a 3D scene using HTML markup
* Some great starters at [glitch.io](https://glitch.com/~aframe)


<!-- .slide: data-background-image="images/magnifying-glass-2244781_1280.png" -->
#### Inspector
* Press `<ctrl> + <alt> + i` to open the inspector
* Can change properties on the fly
* Copy settings to clipboard
	* It does not save


<!-- .slide: data-background-image="images/game-1878121_1280.jpg" -->
## Components
* Import pre-built or custom aframe components
* Lots of cool components in [The registry](https://aframe.io/aframe-registry/)


<!-- .slide: data-background-image="https://upload.wikimedia.org/wikipedia/commons/7/78/Hexahedron.jpg" -->
### Position and rotation
* Vector 3 for x, y, z

```
<a-box
	position="0 1 -2"
	rotation="45 45 45"
></a-box"
```


<!-- .slide: data-background-image="images/wood-3221038_1280.jpg" -->
### Materials
* Apply a texture using src

```js
<a-sky src="images/space.jpg"></a-sky>
```

* Set properties using [material component](https://aframe.io/docs/0.8.0/components/material.html)

```js
<a-sphere material="shader: standard; color: #ddf"></a-sphere>
```

[Skydome](demo/skydome.html)

Note:
Make a skydome


<!-- .slide: data-background-image="images/movie-296751_1280.png" -->
### Animation
* Some [inbuilt animation](https://aframe.io/docs/0.8.0/core/animations.html)
* really powerful [animation component](https://www.npmjs.com/package/aframe-animation-component)
```html
<a-box animation="
	property: rotation;
	from: 0 0 0;
	to: 360 360 360;
	dur: 10000;
	loop: true;
	autoplay"
></a-box>
```

Note: Make the sun spin


<!-- .slide: data-background-image="images/MaxPixel.freegreatpicture.com-Tool-Clay-Utensils-Borbagatto-Magela-To-Model-1754170.jpg" -->
### Models
* Best support for gltf
* Can use obj and collada
* Animation is not yet properly supported
* Can import from web sources with https://dist.3d.io/3dio-js/1.1.x/3dio.min.js


<!-- .slide: data-background-image="images/MaxPixel.freegreatpicture.com-Tool-Clay-Utensils-Borbagatto-Magela-To-Model-1754170.jpg" -->
### Model code
```html
      <a-entity
                id="satelite2"
                json-model="src: url(https://cdn.glitch.com/6dfb547f-c816-4bfc-9bb6-0ca8d2cb7ec2%2FSatelliteSpinOrig.json?1518074111017);"
                position="1 1 1"
                scale=".1 .1 .1"
                animation-mixer="clip: *"
      ></a-entity> 
```

[Demo](https://glitch.com/~pine-visitor)


<!-- .slide: data-background-image="images/light-1030988_1280.jpg" -->
### Lighting
* [Light component](https://aframe.io/docs/0.8.0/components/light.html)

```js
	<a-entity light="type: directional; color: #FFF; intensity: 0.6" position="-0.5 1 1"></a-entity>
```

Note:
Add lighting from sun if possible


<!-- .slide: data-background-image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Oculus-Rift-Touch-Controllers-Pair.jpg/1024px-Oculus-Rift-Touch-Controllers-Pair.jpg" -->
### Controls
* [Hand controls](https://aframe.io/docs/0.8.0/components/hand-controls.html)
* Can hook into mouse events


<!-- .slide: data-background-image="images/custom-jet-propelled-truck-609112_1280.jpg" -->
## Custom components
* Write with javascript
* Add entities and components
* Access using existing DOM functions
* Can tap into threejs for more complex components


<!-- .slide: data-background-image="images/custom-jet-propelled-truck-609112_1280.jpg" -->
## Custom component example
```js
AFRAME.registerComponent('backface-text', {
	schema: {
		text: {type: 'string', default: ''},
		color: {type: 'string', default: '#000'},
		font: {type: 'string', default: 'default'}
	},
	multiple: false,
	init: function() {
		var data = this.data;
		var frontText = this.frontText = document.createElement('a-entity');
		var backText = this.backText = document.createElement('a-entity');

		frontText.setAttribute('text', data);
		backText.setAttribute('text', data);
		backText.setAttribute('rotation', '0 180 0');

		this.el.appendChild(frontText);
		this.el.appendChild(backText);
	},
	update: function() {
		var data = this.data;
		this.frontText.setAttribute('text', data);
		this.backText.setAttribute('text', data);
	},
	remove: function() {
		this.el.removeChild(this.frontText);
		this.el.removeChild(this.backText);
	}
});
```



<!-- .slide: data-background-image="https://upload.wikimedia.org/wikipedia/commons/5/5f/Augmented-reality.jpg" data-state="fade-bg"-->
## AR.js
* [Has an aframe component](https://github.com/jeromeetienne/AR.js)
* Super cool!
* Uses pattern markers

![Hiro marker](https://upload.wikimedia.org/wikipedia/commons/4/48/Hiro_marker_ARjs.png) <!-- .element class="fragment" data-fragment="1" -->


<!-- .slide: data-background-image="https://upload.wikimedia.org/wikipedia/commons/5/5f/Augmented-reality.jpg" -->
### AR.js code
```js
<a-scene arjs>
        <!-- define a marker -->
        <a-anchor>
                <!-- define the content to be displayed on top of the marker -->
                <a-box color="#2EAFAC"></a-box>
        </a-anchor>
        <!-- define a simple camera -->
        <a-camera-static/>
</a-scene>
```

[Demo](demo/ar.html)



<!-- .slide: data-background-image="images/computer-woman-technology-programming-font-animation-1204851-pxhere.com.jpg" data-state="fade-bg-strong"-->
### How do I get started?
* [A-Frame school](https://aframe.io/aframe-school/#/)
* [Docs and demos](https://aframe.io/)
* [JSConf.asia talk](https://www.youtube.com/watch?v=QYnJUrvzlLk&t=651s)
* [ARJS Intro](https://medium.com/arjs/augmented-reality-in-10-lines-of-html-4e193ea9fdbf)
* [JSConf.asia arjs talk](https://www.youtube.com/watch?v=NBrM7YVznzk)
* [Supermedium](https://www.supermedium.com/) a VR web browser
* Hit me up on [Slack](https://slack.darwinwebstandards.org/)
