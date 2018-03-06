<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
# <span>Skill Up:</span> <span>Code</span>



<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
## Accessibility


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Tables
* Present tabular data
* Easy to scan by column or row
* Must be properly marked up for screen readers and other tools
* &lt;caption&gt; immediatly after &lt;table&gt;
* Headers should be marked `scope="col"` or `scope="row"`

Note:
Data tables are used to present tabular data. They are easy to sighted users to scan by column or row. They must be clearly marked up for tools like screen readers to read them properly. 
Captions are added immediately after the table is opened
Headers should be marked with scole=”col” or scope=”row”. This makes it clear if the header is for the row or column. 


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Forms
* Logical order
* Test with tab navigation
* Break large forms into groups with &lt;fieldset&gt;
* Input should always have a label
* Do not use placeholder instead of a label

Note:
Forms should be structured in a logical order. It is alright to change the order a little with styling (e.g. right to left or columns) but it should still be immediately intuitive which way the form flows. Try using tab to navigate the form to ensure it makes sense. Large forms should be broken into logical group using fieldsets. 
All inputs should have a label correctly attached using the for attribute. NEVER use placeholder instead of a label. Placeholder should be used to provide examples of expected input if the format is unclear.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Colour contrast
* Vision problems are incredible common
* Red/green colour blindness affects ~8% of Northern European Men
* Strong contrast important for everyone

Note:
How many people wear glasses here?
Red green colour blindness affect 8% of Northern European Men (https://nei.nih.gov/health/color_blindness/facts_about) although it varies by ethnicity. 
Only around 1 in 100- eskimos are colour blind (http://www.colour-blindness.com/general/prevalence/)
Blue colour blindness is less common.
Strong contrast is not just for colourblind people though. It is hard for everyone to read with poor contrast and especially hard for people with failing vision.
Show colour blind examples


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Activity: Fix the contrast
* Download template from learnline
* Fix colour contrast


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Keyboard Navigation
* Must be possible to navigate without a mouse
* Try using tab
* Focus must be visible. Do not remove :focus styling
* Use correct elements to get default focus
* Can change focus with tabindex but be careful

Note:
Many users with mobility difficulties need to navigate without a mouse. You should be able to tab through the key elements of a page. It is also important to make it clear which elements are focused. 
Tabindex allows you to change tab focus. It can be useful but it is easy to screw up. It’s better to use the correct elements where possible.
:focus can help you show when an element is focused. You should not remove the browser default unless you are making it clearer.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Media
* Videos should have subtitles
* Audio should have transcripts

Note:
Videos should have subtitles. Youtube offers same great predictive tools that help you get started making subtitles. Audio content should have a text transcript available.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Images
* Use the alt tag!!!!!
* If the image doesn't add content use CSS
* Can caption diagrams using &lt;figure&gt; and &lt;figcaption&gt;

Note:
All content images require an alt tag to describe the image. If the image is not content it is usually better to include it using CSS. You can add captions using figure and figcaption. We'll talk about them later.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/q_ATY9gimOM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
