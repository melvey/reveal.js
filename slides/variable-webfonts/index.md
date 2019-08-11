<!-- .slide: data-background-image="images/bg.jpg" -->
# Variable WebFonts <!-- .element: class="title" -->



<!-- .slide: data-background-image="images/bg.jpg" -->
## What are variable webfonts
* Similar to existing web fonts
* Variables like _weight_ and _size_ are on an axis
* [Can be interpolated](https://v-fonts.com/)


<!-- .slide: data-background-image="images/bg.jpg" -->
## Common font syntax
You are likely familiar with the existing font syntax
```css
h1 {
	font-family: sans-serif;
	weight: 600;
	font-size: 2rem;
}
```


<!-- .slide: data-background-image="images/bg.jpg" -->
## Variable font syntax
Variable fonts add font-variation-settings
```css
h1 {
  font-family: 'AmstelvarAlpha';
  font-variation-settings: 'wdth' 400, 'wght' 98;
}
```
* The common syntax still applies (although wght effectively replaces weight)


<!-- .slide: data-background-image="images/bg.jpg" -->
## Five common axis names
OpenType defines five common axes, although they only work if a font implements them
* Weight: wght
* Width: wdth
* Slant: slnt
* Optical Size: opsz
* Italics: ital
* Grade: GRAD


<!-- .slide: data-background-image="images/bg.jpg" -->
## Common axes can be set with font properties
* font-weight can take any integer from 1-999 (no longer just multiples of 100)
* font-stretch takes a percentage where 100% is normal <!-- .element: class="font-stretch" -->
* font-style takes an oblique angle from -90 to 90
* font-optical-sizing takes auto or none to turn on optical sizing

[Demo](https://codepen.io/fridanyvall/pen/ZmKdqJ)


<!-- .slide: data-background-image="images/bg.jpg" -->
## Can use custom variables
A font may implement new custon axes
```
h1 {
	font-family: "Decovar Regular24"; 
	font-variation-settings: 'SSTR' 1000;
}
```
* [Check out the options for decovar](https://www.axis-praxis.org/specimens/decovar)


<!-- .slide: data-background-image="images/bg.jpg" -->
## One font to rule them all... or less than before
* Existing fonts bundle glyphs for many font weights
* Variable fonts allow one font to include all intermediate weights
* [This can result in significant size reducations](https://www.monotype.com/resources/articles/part-2-from-truetype-gx-to-variable-fonts/)


<!-- .slide: data-background-image="images/bg.jpg" -->
## Responsive fonts
* Variable fonts give us the flexibility to adapt a single font to screen sizes.
* This is an important step towards responsive fonts that can adapt to the space available to them.
* It is however still difficult to implement without javascript.


<!-- .slide: data-background-image="images/bg.jpg" -->
## Makes some very cool icon fonts
[Zycon](https://www.axis-praxis.org/specimens/zycon)


<!-- .slide: data-background-image="images/bg.jpg" -->
## Examples
<iframe name="cp_embed_1" src="https://codepen.io/mandymichael/embed/YYaWop?height=455&amp;theme-id=1&amp;slug-hash=YYaWop&amp;default-tab=result&amp;user=mandymichael&amp;embed-version=2&amp;pen-title=Grassy%20Text%20with%20Variable%20fonts.&amp;name=cp_embed_1" scrolling="no" allowtransparency="true" allowfullscreen="true" allowpaymentrequest="true" title="Grassy Text with Variable fonts." class="cp_embed_iframe " style="width: 100%; overflow: hidden; display: block; height: 100%;" id="cp_embed_YYaWop" height="455" frameborder="0"></iframe>


<!-- .slide: data-background-image="images/bg.jpg" -->
<iframe height="265" style="width: 100%;" scrolling="no" title="CSS only Variable font demo using Decovar Regular" src="//codepen.io/mandymichael/embed/dJZQaz/?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mandymichael/pen/dJZQaz/'>CSS only Variable font demo using Decovar Regular</a> by Mandy Michael
  (<a href='https://codepen.io/mandymichael'>@mandymichael</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


<!-- .slide: data-background-image="images/bg.jpg" -->
## Further reading
* This is inspired by [a talk](https://www.youtube.com/watch?v=BBWMIxXqr-E) by [Mandy Michael](https://codepen.io/mandymichael)
* [AxisPraxis](https://www.axis-praxis.org/specimens/__DEFAULT__) has a great playground to try out OpenType fonts
* [MDN provide a introductory variable fonts guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts/Variable_Fonts_Guide) and [Google also provide an introductory overview](https://developers.google.com/web/fundamentals/design-and-ux/typography/variable-fonts/)
