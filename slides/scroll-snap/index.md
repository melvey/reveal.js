<!-- .slide: data-background-image="images/17063208_a739b50788_o.jpg" -->
# Slide lock



## Snap viewport to a scroll position



## What's new?



## [CSS Scroll Snap Points](https://www.w3.org/TR/2015/WD-css-snappoints-1-20150326/)
* introduced in FF 39 & IE 10 then deprecated
![Deprecated Notice](images/MDN-deprecated.png)



## [New Element Level CSS Scroll Snap](https://www.w3.org/TR/css-scroll-snap-1/)
* introduced in Safari 11 and last week in Chrome 69
![Caniuse image](images/scroll-snap-caniuse.png)


* Still only limited support
* Well suited to progressive enhancement



## How does it work?
[CSS Scroll Snap Demo](https://codepen.io/elvey/pen/NLXVNj)


## Two properties to set

```css
.container {
  scroll-snap-type: y mandatory;  
}

.item {
  scroll-snap-align: center;
}
```

Note:
Set scroll-snap-type on the scollable container and scroll-snap-align on the scroll targets


## Three types of scroll, two directions
```css
scroll-snap-type: [x | y] [none | mandatory | proximity];
```

Note:
X scrolls on the X access, Y scrolls on the Y access


## Four scroll targets
```css
scroll-snap-align: [none | start | end | center]
```
[Demo](https://snap.glitch.me/carousel.html)



## References
* [Mouse wheel image](https://www.flickr.com/photos/negativz/17063208) created by Rodrigo Senna [CC BY 2.0] retrieved from Flickr



## Resources
https://developers.google.com/web/updates/2018/07/css-scroll-snap
https://snap.glitch.me/carousel.html
https://css-tricks.com/introducing-css-scroll-snap-points/
