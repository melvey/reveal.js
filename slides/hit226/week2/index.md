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



<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
## Structural elements

Note:
We talked last week about why semantic HTML is important. There are a lot of different elements. Lets have a look at a few. Don’t worry if you don’t remember them all, you can always come back to look later. 


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Headings

Note:
HTML has 6 heading levels. H1 - h6 and should be used in order. A document should have exactly one h1 element and each heading should fall under the heading above it. Some guides say you shouldn't use anything more than h3 or h4, the headings exist for a reason and it is fine to use them but it might be a clue that your content is too complicated


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### &lt;nav&gt;

Note:
Nav indicates that it contains navigation links. In your exercises last week quite a few people used nav elements which was really good to see. Please note that is is not a list element and may not have list items as direct children. It may however contain an ordered or more often, an unordered list.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### &lt;figure&gt; and &lt;figcaption&gt;

Note:
A figure is usually an image, diagram, graph, code snippet or similar. It should be self-contained and make sense without the surrounding content. Figcaption contains a caption or legend for the parent figure.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### &lt;article&gt;

Note:
A self-contained item of content. It should generally have a heading. If you pulled an article out and put it on another page it should still make sense. Examples are blog posts, user comments or even items in an image gallery if they don’t need context. 


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### &lt;section&gt;

Note:
An item of content that depends on the surrounding content for context. If you pulled a section out and put it elsewhere it would not make sense. A section should also generally have a heading. 


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### &lt;p&gt;

Note:
The paragraph tag should be used for all text paragraphs. This is preferable to a div as it is clear it contains a paragraph of text.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### &lt;div&gt; and &lt;span&gt;

Note:
If a tag is needed for styling but should not have an impact on the structure of the context you should use a div or a span tag. 


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### &lt;input&gt;

Note:
Not really a structural element. But worth mentioning all the same. You are likely familiar with the input element. However HTML added a lot more types that give forms more semantic context. Instead of just text, radio, password, hidden, etc… We now have input types like email, date, number and tel. Note that these do not all give you a special input form but help advise the user’s browser what type of input is expected. For example tel is considered too complicated for browsers to validate but may prompt a mobile browser to first show a numeric keyboard.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Activity: Write the markup
