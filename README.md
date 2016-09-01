# Slice Vote

Slice Vote is a full-stack web application currently undergoing early front-end development in Angular2. It will have a back-end developed in Rails when the time comes.

### Overview
Slice Vote aims to help every eligible person vote in county level elections. It is designed to be a fully accessible, single-page application consisting of a dynamically rendered, user-manipulatable table.

##### Research and Design
Pre-production began with user interviews. I interviewed about a dozen people, asking the following questions:

  - Did you vote in your state's primary election? If yes/no, why?
  - Where do you look for information when preparing to vote?
  - Are there any parts of voting that you struggle with, particularly from an information pov?
  - Do you think its possible for a source of information to be unbiased?
  - What can a website or information source do to be more trustworthy, in your opinion?
  - Would you use a one-stop-shop voting website?
  - What is the most important piece of information you need about a candidate in order to decide for or against them?

The answers to these questions helped me to figure out the extremes of my user spectrum:

   - Gathers info at the last minute vs. Gathers info early and often
   - Votes never vs. Votes always
   - Too overwhelmed to think about voting vs. Fearless voter
   - Thinks that their vote won't make a difference vs. Believes in the power of a democracy and an informed public

I approached the design phase with my extremes in mind, because if I could take care of them, then my moderate users would naturally fall into place. Although there are a lot of opportunities for Slice Vote to take up pages and pages of web space, I wanted to simplify it down to its most basic parts. If Slice Vote could only have one page to accomplish all of its goals, then that one page would have a table. Many of the people I interviewed preferred to compare their data side by side, which is how I arrived at that component.

Next, I broke down the table itself, making it do as much heavy lifting as it could without making it complicated. The table displays one piece of information about every candidate running for a position. The position is set by the user through a series of guided drop downs before they reach the table, and then the one piece of information displayed is manipulated through a drop down menu heading the second column. The first column contains basic information about a candidate on a candidate tile, including their photo, name, and links to websites and social media accounts, if applicable. Each candidate tile also contains a closing button, which shrinks a candidate's entire row in the table. This mechanic allows the user to reach their vote by process of elimination. The candidate's name and closing button remain visible, so a user can easily restore a candidate to the selection process if they change their mind.

The remaining design decisions arose out of accessibility opportunities. The first element on the page is a links section, which would allow a keyboard user to quickly jump to their destination. The second element on the page is a language selector, which offers English and the next 5 most common languages spoken in Oregon after that. The color scheme is designed to have high contrast for users with impaired vision, and no components have a function that requires the user to differentiate between colors that might be difficult to discern with color vision impairments.

The initial design went through 3 revisions before front-end development began.


##### Front-End Development
Slice Vote is currently under development using Angular 2.

Honestly, I'm currently overwhelmed by trying to understand how to handle the data, but I'm looking into it. Other known issues:
   - HTML drop down menus cannot be styled because they are rendered by the browser, so an alternative build to the select tag needs to be explored.
   - HTML Aria needs to be implemented to convey changes in the DOM as they happen.
   - Branching behavior needs to be added to the navigation drop down menus.
   - Research and implement directives for fetching table data.
   - Refactor CSS into SCSS before it's too late.
   - Link to targets on the page.


##### Back-End Development
Back-end development for Slice Vote has not started yet. Currently, a Rails app is being planned to handle the data input and management.

### Installation
If you would like to check out Slice Vote, feel free to clone this repo onto your machine. You will need to have node installed. Once cloned, run npm install, then npm start, and navigate in your browser to localhost:3000.

### Thank You!
Thank you for taking the time to check out Slice Vote! I'm very excited about its progress and I'm learning a lot through this process. If you have any comments, concerns, suggestions, or well-wishes, please email me at techdaly@gmail.com.
