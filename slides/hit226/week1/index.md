<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
# <span>Skill Up:</span> <span>Code</span>



<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
## Browser and development tools



<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
Plenty of good brower choices

![Firefox logo](images/Firefox_Logo,_2017.svg) <!-- .element: class="browser-icon" -->
![Google chrome logo](images/Google_Chrome_icon_2011.svg) <!-- .element: class="browser-icon" -->
![Microsoft edge logo](images/Microsoft_Edge_logo.svg) <!-- .element: class="browser-icon" -->

Note:
As you’re likely aware the different major browsers have some differences in the features they support and performance. Everyone has their own preferences and so in the workplace we need to test with all the major browsers.



<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
We're going to use chrome

![Disabled Firefox logo](images/Firefox_Logo,_2017.svg) <!-- .element: class="browser-icon browser-icon_disabled" -->
![Selected Google chrome logo](images/Google_Chrome_icon_2011.svg) <!-- .element: class="browser-icon browser-icon_selected" -->
![Disabled Microsoft edge logo](images/Microsoft_Edge_logo.svg) <!-- .element: class="browser-icon browser-icon_disabled" -->

* Modern feature set <!-- .element: class="fragment" data-fragment-index="1" -->
* Great development tools <!-- .element: class="fragment" data-fragment-index="1" -->

Note:
To make things simple, we’re just going to use Chrome for this class. Chrome has a very modern feature set and great development tools that will make our work much easier. Let’s get to know the features.



<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Chrome Developer tools: DOM Inspector
<video>
	<source data-src="videos/open-dev-tools.webm" type="video/webm" />
</video>

Note:
Click the elements tab and look at the contents. It should look just like HTML you wrote for the exercise. This is not the same as the source code though as it represents the elements currently on the page. If you used javascript to add or remove an element it would appear here. This is a representation of the Document Object Model or DOM. You can just think of the DOM as how the browser keeps track of what’s on the page.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Chrome Developer tools: DOM Inspector
<video>
	<source data-src="videos/dev-tools-elements.webm" type="video/webm" />
</video>

Note:
Expand the page elements if they are not already by clicking on the little arrows. Notice how the view of your page highlights the element you are currently hovering over? This makes it easy to see where the element sits as well as any padding, margins or borders. On the right you can see the CSS for the element.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Chrome Developer tools: DOM Inspector
<video>
	<source data-src="videos/dev-tools-edit-style.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Chrome Developer tools: DOM Inspector
* Explore your dom
* Give some elements a border to see where they sit
	<pre><code class="css">border: 1px solid black;</code></pre>
* Drag some elements in to others
* Can you edit the text of a heading?
* What happens when you refresh? Why?



<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Chrome Developer tools: Network
* View all HTTP requests the page makes <!-- .element: class="fragment" data-fragment-index="1" -->
* View files downloaded <!-- .element: class="fragment" data-fragment-index="2" -->
* View REST requests and responses <!-- .element: class="fragment" data-fragment-index="3" -->


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Chrome Developer tools: Network
<video>
	<source data-src="videos/dev-tools-network.webm" type="video/webm" />
</video>


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Chrome Developer tools: Network
![Chrome network tab](images/chrome-dev-network.png)

Note:
Open the network tab and reload the page. You will see a list of files appear. Each of these is a seperate HTTP request. They include the original HTML document as well as any images, stylesheets or scripts the page requires. You can also see when the page requests more data from a server.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Chrome Developer tools: Network timeline
![Chrome network timeline](images/chrome-dev-network-timeline.png)

Note:
The timeline shows when it loaded different resources and how long they took. If you have a really big script or image that is making everything slow to load you can see it here.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Chrome Developer tools: Network requests
![Chrome network requests](images/chrome-dev-network-requests.png)

Note:
The timeline shows when it loaded different resources and how long they took. If you have a really big script or image that is making everything slow to load you can see it here. It will show you the file requested, the response code, what initiated the request, how big the file is and how long it took to download.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Chrome Developer tools: Network details
![Chrome network details](images/chrome-dev-network-details.png)

Note:
The bottom panel tells you how big the page is and how long it took to download and load. What do you are the difference between Finish, DOMContentLoaded and Load?



<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Chrome Developer tools: Web console
![Chrome console](images/chrome-dev-console.png)

Note:
The console is where any page errors or javascript output appear. There probably isn't much for your pages. But this is really useful once you start using javascript. We'll come back to this later in the course.




<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Chrome Developer tools: Activity
* Open a favourite website with dev tools open
* How big is the page?
* How long did it take to download?
* Did it download a lot of files or not many
* Are there any errors or warnings in the console?
* Have a look through the elements to learn the page structure
* Report back to the class on what you find




<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
## Atom Editor
![Atom editor](images/Atom_editor_logo.svg)

Note:
For this course we're going to use Atom. There are a lot of different text editors available and lots are people are pretty dedicated to their favourite. If you already have a favourite feel free to use that. But for those getting starting we recommend using atom


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Why use atom
* Cross platform
* Package manager
* Git integration
* Configurable
* Easy to setup and learn
* Cool features
	* Syntax highlighting
	* Smart autocomplete
	* Search and browse project files

Note:
Atom is a cross platform, customisable text editor for coding. It is easy to setup and get started with but lets you complately configure the look and feel using HTML and CSS and to extend the functionality with plugins. It also comes with a lot of useful features out of the box like autocomplete, syntax highlighting and project wide search.
It is also really customisable using web languages. You can change the whole application theming using just CSS!


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
<video>
	<source data-src="videos/atom-intro.webm " type="video/webm" />
</video>


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Atom: Activity
* Open atom and add the document you made before class as a project
* Explore atom features
	* Open settings menu (ctl+,)
	* Explore features in the command palette (ctl+shift+p)
	* Explore keyboard shortcuts from a list like [https://gist.github.com/chrissimpkins/5bf5686bae86b8129bee](https://gist.github.com/chrissimpkins/5bf5686bae86b8129bee)


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
Share what you found


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Atom plugins
* Open the settings menu (ctl+,) and select install
* Type in devdocs and install the package
* Now go to your html document and select a tag name
* Press ctl+alt+D to open the documentation for that tag from [https://devdocs.io](devdocs.io)



<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
## HTML Validation


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Why validate
* Identify mistakes
	* Typos
	* Unclosed tags
	* Missing doctype
	* Weird stuff

Note:
If you make a mistake in your HTML the browser will guess what you were trying to do and show that. This means that sometimes you don’t notice if you forgot to close a tag or used an invalid property. Unfortunately, because the browsers guess what they think you’re trying to do it might not work the same in all browsers. To address this we can validate our HTML.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
<video>
	<source data-src="videos/html-validator.webm" type="video/webm" />
</video>

Note:
You can see I've made some mistakes in my HTML. I accidently included an extra < in an img tag and forgot to close some tags


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Validation Exercise
* Visit [https://validator.w3.org/](https://validator.w3.org/)
* Validate your page by direct input
* Discuss what you found



<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
## Semantic HTML

Note:
HTML represents the content and structure of a page. We spend so much time thinking about what the page looks like that we sometimes forget this. But when writing HTML we shouldn’t be thinking about the visual layout so much as the structural layout.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Why do semantics matter
* Bots and SEO
* Vision impaired users
* People with arthritis
* Someone eating a sandwich
* Developers picking up your code (you)

Note:
Not everyone looks at a page as we see it rendered. Just as not everyone navigates it with a keyboard and a mouse. A well structured page pages it easier to parse and navigate for all users. Some examples of users we might want to consider.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Semantic elements
Describe what is in the tag
* form
* img
* table
* ul

Note:
Not everyone looks at a page as we see it rendered. Just as not everyone navigates it with a keyboard and a mouse. A well structured page pages it easier to parse and navigate for all users. Some examples of users we might want to consider.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### New HTML5 semantic elements
* header
* main
* footer
* nav
* section
* article
* video

Note:
Not everyone looks at a page as we see it rendered. Just as not everyone navigates it with a keyboard and a mouse. A well structured page pages it easier to parse and navigate for all users. Some examples of users we might want to consider.

<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Semantics Activity
* Have a look at the element list at [https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
* Look at the flowchart at [http://html5doctor.com/downloads/h5d-sectioning-flowchart.png](http://html5doctor.com/downloads/h5d-sectioning-flowchart.png)
* Update your HTML to use the new semantic elements


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Questions
* When do you think you should use a div element?
* How should you name a new section?
* What do you think about the new semantic elements?
	* Too many
	* Not enouch
	* Too confusing?


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Final thoughs
<blockquote cite="http://html5doctor.com/lets-talk-about-semantics/">
	<p>Don&#39;t think of &lt;article&gt; as a magazine article. Think of it as an article of clothing, an independent entity that can be arranged in conjunction with other articles of clothing, but is a complete thing in itself.</p>
	<footer><a href="http://html5doctor.com/lets-talk-about-semantics/">Bruce Lawson</a></footer>
</blockquote>



<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
## Git


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### What is git
* Source control
* Version control
* Distributed


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Why use git
* Store and share source code
* Tracks changes and versions over time
	* Can go back if we broke something
* Allows multiple people to work on the same code without disrupting eachother


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Git functions
* Clone - Copy a repository to our local machine
* Add - Stage a file to commit
* Commit - Store a code change in git
* Push - send our code changes to the server
* Fetch - Get code from the server
* Merge - Mix new code in with ours or vice versa
* Rebase - Like merge but different

Note:
You might also hear git pull. This is a shortcut command to fetch and merge


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Github
* A public git server
* A place to publish and share your code
* A place to find and download code other people have written
* A platform to submit code changes to open source projects


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Activity: Setup a git repository
* Register for github
* Create a new repository for the unit
* Create a folder in the repository for week 1


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### WinGit client
* Lots of clients available
* Download from [https://git-scm.com/](https://git-scm.com/)
* GUI with Git GUI and command prompt with Git Bash


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
#### Clone a repository
![Git GUI open menu with "Git GUI here" highlighted](images/gitgui-open.png) <!-- .element: class="screenshot--small" -->
![Git GUI new repoitory and clone options](images/gitgui-menu-new.png) <!-- .element: class="screenshot--small" -->
![Git GUI clone menu](images/gitgui-menu-clone.png) <!-- .element: class="screenshot--small" -->

Note:
To clone an existing repository to your computer, right click where you want to clone it and select "Git GUI here". Select "Clone existing repository" and enter the git address in "Source Location". Enter the path you want to clone to in "Target directory". Note that the final directory in target directory should not exist as git will create it for you.

<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
#### Fetch changes


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Commit and Push


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Activity: Git local repository
* Clone the project to your local machine
	* You can get the address from the green clone button on github
* Copy your html and any required files to the week one directory
* Add the new files to git
* Commit the staged files with the comment "Add week one files"
* Push your code and check it appears on the github website
* Edit the readme file and push it to github


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Some tips
* Fetch from the server before you start writing
* Push whenever you finish writing
* A commit should be self-contained
	* If you are editing multiple files, include them all
	* Keep them small so it is easy to see what has changed
	* It is better to commit too much rather than not enough
	* Try not to break things


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
### Merge errors
* If you get a merge error look at what has changed and decide what you want to keep
* Do not force push. You will probably make things much worse.


<!-- .slide: data-background-image="images/bg-mouse.jpg" -->
