<!-- .slide: data-background-image="images/bg.jpg" -->
# Variable WebFonts



<!-- .slide: data-background-image="images/bg.jpg" -->
## What are variable webfonts
* Similar to existing web fonts
* Variables like _weight_ and _size_ are on an axis
* [Can be interpolated](https://v-fonts.com/)


<!-- .slide: data-background-image="images/bg.jpg" -->
## Common font syntax
h1 {
	font-family: sans-serif;
	weight: 600;
	font-size: 2rem;
}


<!-- .slide: data-background-image="images/bg.jpg" -->
## Variable font syntax
h1 {
  font-family: 'AmstelvarAlpha';
  font-variation-settings: 'wdth' 400, 'wght' 98;
}

* The common syntax still applies (although wght effectively replaces weight)


<!-- .slide: data-background-image="images/bg.jpg" -->
## Five common axis names
* Weight: wght
* Width: wdth
* Slant: slnt
* Optical Size: opsz
* Italics: ital
* Grade: GRAD


<!-- .slide: data-background-image="images/bg.jpg" -->
## Can use custom variables
h1 {
	font-family: "Decovar Regular24"; 
	font-variation-settings: 'SSTR' 1000;
}

* [Check out the options for decovar](https://www.axis-praxis.org/specimens/decovar)


<!-- .slide: data-background-image="images/bg.jpg" -->
## One font to rule them all... or less than before
* Existing fonts bundle glyphs for many font weights
* Variable fonts allow one font to include all intermediate weights
* [This can result in significant size reducations](https://www.monotype.com/resources/articles/part-2-from-truetype-gx-to-variable-fonts/)


<!-- .slide: data-background-image="images/bg.jpg" -->
## Makes some very cool icon fonts
[Zycon](https://www.axis-praxis.org/specimens/zycon)

