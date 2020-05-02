Project Owner:
==============

My name is Anthony S Nwankwo and this is the Readme.md file for my GitHub,
which is a markdown document. It contains the latest update to files in
my project portfolio (Project 02)

Overview/description of the project
===================================

This project is the second one for this BOOTCAMP. 

The goal of this project is to build out a Giphy search engine that:

* 	allows users to enter and submit a keyword
* 	makes a request to the Giphy api based on that keyword
* 	receives and parses the response
* 	displays images on the page from that response
* 	uses a custom css to display the images
* 	ensures the site is responsive so that it looks good/works well on both desktop and mobile devices


The tecnologies used for the project are:

* Flexbox CSS
* Media queries CSS
* Bootstrap 4
* JQuery JavaScript
* HTML5


The Technical requirements:

1) Site needs to contain one HTMl page, but there should still be multiple links in your menu (even if they don't link to other pages)
2) There should be an input field (with a type of search) & a submit button
3) A user should be able to type in a search phrase, click the submit button, and the site should query the Giphy API based off of the search that the user has entered
4) Iterate through the returned data, and for each returned object in the array, find an image in the returned JSON and append that image to the screen
5) Your project should contain three files: index.html, style.scss, style.css and main.js (which I have named script.js) 

Other custom implementations:

I added an option to trigger the search by pressing the ENTER Key
I created short-cut array of buttons with search keys as labels. This saves the user key strokes (one of the USER STORIES)
If the user does not enter a search count, the App returns the maximum of 30 images. 
To get a decent layout for the images, I constrained the display to rows of six images on a large screen. 
This means that when the user enters a search count value that is not a multiple of six, the App returns 




Ideas for future improvement
============================

-	Implement a server authentication such that only paid users are allowed access 
	to the detailed parts of the tutorials. When a user first gets to the site, 
	the free sections of the tutorial will be available while the button / links 
	to other sections are grayed out until the user is authenticated
-	Create several exercises that offers the user some multiple choice answers 
	to test acquired skills 
-	Implement an automatic logout scheme that monitors for prolonged idle time.
	This will log out any user who stays idle for a maximum period of time. 


User Stories
============

-   As a user, I would like to have the programmer provide a guide to what are the most common search keywords in the form of buttons.
    That will save me key strokes

-   I will also like to rurn as many images as possible without bothering to specify the count of images. Also it will be nice to have a feature that allows 
    me to initiate the search by pressing the ENTER key

-   Lastly, as a user, I would like to hide some of the menu items when I am using the app on a very small device and line up the social icons 
    in a row (rather than stack them) when on small devices
    





