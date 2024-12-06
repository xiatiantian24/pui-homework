# **FP4 \- Final Project Writeup**

## Part 1: Website Description

> **Note: Please find [my live site here](https://rayx-pui-final-project.netlify.app/) deployed on Netlify**. It is not available on Github pages due to the installation of Astro framework. Please contact rayx@andrew.cmu.edu if you have trouble accessing the site.

---

> Purpose
* My website is a personal portfolio that documents my past projects and hobbies.

> Audience
* The primary target audience of the site are potential recruiters looking for UX Design/Engineering roles, but it can also be for anyone interested in getting to know me.

> Information to convey
* Overall, I wish to showcase my skills in interaction design, web development, creativity, my passion for design, and my personal values and aesthetics through my website. 

* The first section you will see on the home page is a quick introduction of what I do as a profession, where my previous experience come from, and a profile image.

* Scrolling down to the main section of the home page, you will see a list of my projects, each including a short description about what it is, who it's made for, the year completed, and my roles in that project.

* The about me page features a longer self-introduction, a copy of my resume, and a fun 3D design I made to demonstrates my creativity, passion, and craft.


> How my site is interesting and engaging
* Audience will find the website interesting and engaging by appreciating its minimal aesthetics as well as exploring multiple satisfying micro-interactions throughout the site.

* Specifically, the aesthetics emphasize on organizing text-heavy pages with minimal color, strong contrast, and bold visual hierarchy.

* Microinteractions such as a dynamic SVG logo and mouse-following buttons add a sense of quirkiness to the sight while keeping the overall tone of site professional and clean.

## Part 2: User Interaction

> Home page
1. Hover/Navigation: Move mouse around the home page to see options to navigate to 'Projects' or 'About' page.

2. Hover/Navigation: Scroll down on home page. Move mouse around to see cover images for each project. Click to navigate to the project detail page.

> About page
1. Download: Scroll down to resume section on about page. Click 'Download Resume' on the left to download a pdf of the resume.

2. Hover: Scroll down further on about page. Hover on the emojis to see image change.

> Nav bar
1. Hover/Navigation: Hover and move mouse around on the logo on the top left of the page to see hover effect. Click to go back to home page.

2. Navigation: Click 'Projects' or 'About' to navigate to according pages.

> Footer
1. Toggle: Toggle 'Current mode' to switch the site between light and dark mode.

## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. [Astro](https://astro.build/)
   * Used for creating reusable components and layout for my site, such as nav bars, footers, and project buttons. 
   * I chose Astro over React because while both are component-based, React might be an overkill for a small project like my personal website. 
   * Astro adds organization and efficiency to my development process, and also makes my site content-driven with reduced JavaScript overhead and complexity.
  
2. [Tailwind CSS](https://tailwindcss.com/)
   * I chose Tailwind over other CSS frameworks like Bootstrap because it allows me to add styling more rapidly with pre-defined CSS while also leaving room for customized styles at the same time. 
   * Used in combination with Astro to add styling to my components, such as `flex flex-col gap-4`. 
   * Tailwind adds semantic styling across my site, E.g., using `text-sm` and `text-lg` to distinguish different text size.


## Part 4: Design Iteration

I made three iterations of the design prototypes. 

The first two versions require hovering on accordions and moving the mouse around to read the image and text on buttons, which I later found can be too much animation and cause visibility issue on smaller screens. Specifically, I observed one testing participant accidentally moving the cursor outside of the accordion, which cause it to collapse and brought them frustration. They wish the images can get smaller in order for them to read the text easier. 

I decided to remove the accordion altogether in tha later iteration and only keep the hovering effect for images, which is the main interaction I wish to stand out on the home page.

## Part 5: Implementation Challenge

1. My JavaScript were only able to execute once per browser session at first. After reading the Astro documentation I realized that it was due how JavaScript is injected at where it’s declared with `type="module"` and will only be included once, which will require workarounds scuh as using the `astro:page-load` event.

2. Making the site responsible was at first challenging mainly because I did not prototype a smaller screen in Figma prior to implementation. Gladly, I was able to solve it using grid template columns and using `@media` rules in CSS without changing too much of the design.

## Part 6: Generative AI Use and Reflection

### Usage Experiences by Project Aspects

| Tool Name | Ratings | design | plan | write code | debug | 
| :---- | :---- | :---- | :---- | :---- | :---- |
| ChatGPT | Usage | No | No | Yes | Yes
| ChatGPT | Productivity | N/A | N/A | 5 | 7 


### Usage Reflection

> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in helping me understand syntax and logic errors. For example, 
  1. ChatGPT: learning how SVG transform attributes are parsed, such as `scaleY(0.9)` is not valid a transform attribute of SVG but `scale(1, 0.9)` is valid.

* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that I said I will not use it to write functions because it won't help me practice what I've learned in the class. For example, 
  1. ChatGPT: The design of animating SVG exceeded my knowledge learned from the class so I decided to reference the structure of the function that ChatGPT provided. I replaced the function detail with my own content, though.

* GenAI tool did not influence my final design and implementation plan because I have built a high-fidelity design before implementing it. For example, 
  1. ChatGPT: I started using ChatGPT to debug and provide specific logic references only after I have created the base code that largely matches the design style and interactions.

> Use patterns
* I accepted the generations when it helped me understand and guided me through a bug fix. For example, 
  1. ChatGPT: I had a missalignment of mouse movement in a mouse follow event and I didn't understand why. ChatGPT read my code and explained that it was due to rotation done on my original svg and provided a math function that realign the X and Y position of the mouse position. I accept the additional math function because it helped me achieve the animation I wanted for my design.

* I critiqued/evaluated the generated suggestions when it generates code with styling. For example, 
  1. ChatGPT: It generated code that did not match my intended design for a filter transition animation. I read the code and understood that it had a correct logic but was using the wrong properties on the wrong target. I referenced the logic and applied it to my design.


> Pros and cons of using GenAI tools
* Pros
  1. ChatGPT: Better understand error messages and possible reasons that cause them. E.g., inferring why a css transition doesn't work as intended.

* Cons
  1. ChatGPT: Need to be cautious with generated code. It may unecessary complicate the problem and beat around the bush when there is a more direct fix. E.g., providing code to fix a update issue in the function while the real issue is about Astro's bundle rendering.

### Usage Log

1. [ChatGPT log for fixing Project Button css transition effect
](https://chatgpt.com/share/6750ca5d-2530-800b-bd9c-df03beb7b7c4)

2. [ChatGPT log for the Logo rotation effect and fixed mouse positioning
](https://chatgpt.com/share/6750cb04-8e6c-800b-ba39-1e635b096802)

### Non-Gen AI References

1. Footer base code referenced from [Dante Astro Template](https://github.com/JustGoodUI/dante-astro-theme/blob/main/src/components/Footer.astro) by Asta Bankauske, 
     Front-End Developer, Co-Founder @JustGoodThemes & @JustGoodUI.

2. Referenced [Stack Overflow](https://stackoverflow.com/questions/75933212/can-i-pass-additional-classes-to-an-astro-component-from-parent) to pass classes to child components.



---

# **FP2 \- Evaluation of the Final project**

## Project Description

I am comparing two ideas. The first idea is the Text Dungeon, a web page with animated text that is not really meant to be read but to play around with.

The second idea is a personal portfolio as a showcase of my past projects.

## High-Fi Prototypes

### *Prototype 1*

![prototype1](images/prototype1-1.jpg)
![prototype1](images/prototype1-2.jpg)

Participants thought the text dungeon idea was creative but were confused about its functionality at first. They thought the scrolling action was intuitive, so were using the keyboard to navigate. 

### *Prototype 2*

![prototype2](images/prototype2-1.jpg)
![prototype2](images/prototype2-2.jpg)

Participants appreciated the clearness of the purpose of the website, although it was difficult for them to navigate around and read all the text.They thought it was cool how the image follows the mouse, but wish their sizes could change.

## Usability Test

In terms of understanding the functionality,
participants had a clearer understanding of the personal portfolio than the text dungeon after exploring both prototypes. This is mainly due to their previous exposures to similar portfolio websites, whereas they had rarely interacted with animated text before.

In terms of navigating the page, the scrolling action from the text dungeon idea felt more intuitive to the participants than the hovering action from the portfolio, as the latter require opening the accordion and moving the mouse around to read the text. Accidentally moving the cursor outside of the accordion will cause it to close, which brought frustration to one participant. They wish the images can get smaller in order for them to read the text easier.

In terms of turning animations or music off, while not functional in the prototype, participants correctly imagined where and how they would approach the task. They also appreciated this function when they wish to read the full story, as animation and sound can be distracting.

Based on the user feedback, it seemed like the the personal portfolio idea has greater potential as it is more functional and matches the usability guidelines. The text dungeon idea has cool animations but is less functional.


## Updated Designs

![updated designs](images/prototype3-2.jpg)
![updated designs](images/prototype3-1.jpg)

Instead of using accdions to contain information about the project, I changed them to a static button that displays key information at all time. The image will still follow the mouse when hovering over the button. Clicking the button will navigate to the detail page of the project.


## Feedback Summary

The lab session was helpful for me to determine which idea is more technically feasible. It seems that doing animation with GSAP require a lot of learning beforehand and the final output may not be as desireable as the design is. I am still willing to incorporate GSAP to my personal website to get more practice with it, such as using the library to enable more smooth transition or page navigation. However, the discussion helped me decide that the main focus of my idea should not be the animation happening by itself but more about how  interact with the website to trigger it.

## Milestones

Weekly milestones until the end of the semester. 

### *Implementation Plan*

- [X] Week 9 Oct 28 \- Nov 1:
  - [X] FP1 due
  
- [X] Week 10 Nov 4 \- Nov 8:   
  - [X] FP2 due
- [ ] Week 11 Nov 11 \- Nov 15: 
  - [ ] Image hovering function implementation
  - [ ] Button function implementation
- [ ] Week 12 Nov 18 \- Nov 22:  
  - [ ] Adding actual content to the button (text, images)
  - [ ] Detail page layout implementation 
- [ ] Week 13 Nov 25 \- Nov 29:  
  - [ ] Responsive design 
  - [ ] Thanksgiving  
- [ ] Week 14 Dec 2 \- Dec 6:  
  - [ ] FP4 due 

### *Libraries and Other Components*

Including but not limited to:

Astro (https://astro.build/)

Tailwind CSS (https://tailwindcss.com/)

## Generative AI Use Plan

Outline how you plan to use Generative AI tools to aid in the implementation (\~300 words).

### *Tool Use*

* ChatGPT  
  * I will use it for checking syntax and explaining why a specific bug happens because it can help me identify problems faster and earlier in the stage.
  * I will not use it for writing functions for me because it won't help me practice what I've learned in the class. 
  * I will also not let it decide the properties to apply to the page (such as color, alt text, content hierarchy) because it might not help me practice implementing usability heuristics.

### *Responsible Use*
I will add comment on the lines of code that are written or informed by ChatGPT, and I will give creadit to other external sources I use. In addition, I will go through any generated code and modify it if needed make sure it aligns with usability guidelines. 


---

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
