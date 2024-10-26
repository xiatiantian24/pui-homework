# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1*

![sketch for text dungeon](images/sketch1.png)

* **What**: a web page with animated text that is not really meant to be read but to play around with
* **How**: GSAP animation library
* **Accessibility**: ensure all affordance are given upon page load and can be retrieved any time when the user asks for help
* **Information to convey**: breaking the preimposed functions of text

### *Idea 2*

![sketch for sing and dance](images/sketch2.png)

* **What**: an interface that tracks body movements to trigger music
* **How**: different “buttons” on the screen that plays different rhythm or beats, option to record sound (camera + Tensorflow.js)
* **Accessibility**: include interactive tutorials and make sure buttons can be selected with keyboards
* **Information to convey**: breaking the physical barrier and make music by moving body around

### *Idea 3*

![sketch for web portfolio](images/sketch3.png)

* **What**: a portfolio with documentations of my past projects
* **How**: astro framework that streamlines component-based content
* **Accessibility**: have semantic tags for screenreader; include buttons to adjust text size and contrast
* **Information to convey**: Showcase my creativity as well as professional works

## Feedback Summary

* The first idea seemed to be more popular because it was discussed for longer times. 
* Eunice, one of my peers, shared with me other websites she has seen with cool scrolling animations. 
* Another feedback I had on usability is to include optional alternative in addition to the primary scrolling action. For example, using arrow key to control the page to go smoothly up and down can be an alternative. 
* Marshall also thought this idea stood out for its creativity.
* Marshall shared his suggestion on affordance:
    > In many games, the first level acts as a well-crafted tutorial that teaches the player moves one by one before letting them progress to the actual levels. You might consider a similar approach.
* The second idea seemed interesting but less clear, and I took some time to explain how it will work.
* Although creative, Marshall thought that the integration with camera and motion might add complexity to usability:
    > As with the Text Dungeon example, it may be helpful to include some interactive tutorials to ease users into the experience.
One thing to keep in mind is the integration of machine learning. While it’s a cool idea, it’s not the primary learning objective of this course. I don’t discourage you from using it, but be mindful of the effort it may require, and ensure it doesn’t distract you from demonstrating your skills in usability, which is the main focus of this course.
* The third idea solicited good design practice from Marshall to test small snippets of code before implementation:
    >You may want to explore worked examples and their source code for the third-party libraries you're interested in but unsure about. This will help you assess which features are replicable and feasible for your project.

## Feedback Digestion

The feedback on usability will be all helpful regardless of which idea I move forward with. For example, scrolling can happen to both the text dungeon idea and the portfolio idea, so it would be beneficial to include key events whenever there is scrolling happening. I am also thinking about incorporating more keyboard functions, such as tab keys for jumping paragraphs, left/right arrow keys for triggering text animation, etc. 

I like the idea of including tutorials to introduce any unfamiliar affordances. As it could be a lot of information to digest at once for first-time users, I want to keep that information retrievable whenever users want to refer to it. For example, it could be a side toggle that can be collapsed by default, and can be triggered by clicking or certain keys to expand and show instructions. An alternative to this is to break the tutorial down into different levels, as users approach from one stage to the next. This alternative might be better applied to the sing and dance idea as opposed to the text dungeon idea, however, as the reading experience of the latter can be interrupted easily with frequent pop ups of tutorials.

I am also down to explore the libraries I'll be using and see what others have done with the library. This will be helpful for me to consider what is possible within the given timeframe. While I'm not set on the final idea, I think exploring the libraries can help me with the decision.

To summarize, the three major feedback I'll keep in mind are:
* include keyboard alternatives to scroll, drag, or click events
* include tutorial to provide affordances
* explore communities of third-party libraries to see what others have done
