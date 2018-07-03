# Project Overview

This project is part of the Udacity Front End Nanodegree program. We were asked to take over and complete the testing of an RSS Feed-Reader application using [Jasmine](http://jasmine.github.io/). The initial application code and Jasmine setup was provided. We were to assume the project was handed to us when the original developer left the company to do other things.

The Feed-Reader pulls updated RSS feeds from several sources, such as Udacity Blog and CSS-Tricks, and collects them in a list of feeds to be read later. There is a hidden menu that can be clicked to open a list of RSS feed sources, from which you can select what content you are interested in viewing.


## Why this Project?

Test Driven Development (TDD) is an important skill to have for Web Developers, and Udacity spent some quality time lecturing on this topic, along with several exercises. This project was provided as a chance to test our understanding and also try Jasmine out for ourselves. The project requirement also included working with callback functions and asynchronous code. Udacity covered writing test specs for asynchronous testing, and we were directed to view the [Jasmine Documentation](https://jasmine.github.io/pages/docs_home.html).

### How to run the Udacity Feed Reader project:
* I have provided a GitHub Project Page that can be viewed to try the application:
  * [GitHub Project Page](https://chadwyck242.github.io/feed-reader-testing/)
  * This may trigger a security warning in your browser, so only allow the application scripts to run at your own discretion. Otherwise follow the steps below.
* The project is located in my GitHub repository for cloning/downloading at [My Feed-Reader Testing Project](https://github.com/chadwyck242/feed-reader-testing)
* If you wish to run the project locally after downloading, try using the [npm](https://www.npmjs.com/) package [http-server](https://www.npmjs.com/package/http-server):
  * Using http-server requires having [Nodejs](https://nodejs.org/en/) installed. Follow this link provided and install according to your operating system.
  * You can then install http-server using npm: `npm install http-server -g`
  * Navigate to where you cloned or downloaded the repository and run http-server with the following syntax: `http-server [path] [options]`, use option 'o' to open the project in a browser.


### The following Jasmine test specs were required assignments per the Udacity Rubric:

1. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Write a new test suite named `"The menu"`.
4. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
5. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
6. Write a test suite named `"Initial Entries"`.
7. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
8. Write a test suite named `"New Feed Selection"`.
9. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

### **Reflection**
I hurried through the content for this part of the Front End Developer NanoDegree, particularly the Build Tools content, as I found they were not of good quality to take too much time on. I collected a large amount of learning materials online, which I will use to fill in the gaps. The 'JavaScript Testing with Jasmine' section of the course was absolutely great, and I literally enjoyed finishing the lecture videos with Michael Wales, and finished all the exercises. The Feed-Reader project proved to me more difficult by far than what we did in the course content, but it was not impossible with what we were taught. A lot of time was spent reading and reviewing code on-line to get a better grasp of Jasmine. A good article on SitePoint by James Wright was particularly useful: [Learning JavaScript Test-Driven Development by Example](https://www.sitepoint.com/learning-javascript-test-driven-development-by-example/).

### License
Please view the License.md in the project repository. This project is covered by the MIT License.  
