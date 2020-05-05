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
* Media queries CSS (was used to hide some menu items on small devices)
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

I added an option to trigger the search by pressing the ENTER Key - it uses the default search keyword set in the code
I created short-cut array of buttons with search keys as labels. This saves the user key strokes (one of the USER STORIES)
If the user does not enter a search count, the App returns the maximum of 36 images (six rows of six images). 
To get a decent layout for the images, I constrained the display to rows of six images (36 max) on a large screen. 
This means that when the user enters a search count value that is not a multiple of six, you get (number entered % 6) rows of images




Ideas for future improvement
============================

-	Implement output that displays additional image information (like rating ...) 
	
-	Screen keywords entered for indecent searches and display a warning to the user in a modal box!   
	 



User Stories
============

-   As a user, I would like to have the programmer provide a guide to what are the most common search keywords in the form of buttons.
    That will save me key strokes

-   I will also like to return just one row of 6 images when the user does not bother to specify the count of images. Also it will be nice to have a feature that allows 
    me to initiate the search by pressing the ENTER key. Also pressing the ESC key wipes out entries in the search boxes

-   Lastly, as a user, I would like to hide some of the menu items when I am using the app on a very small device and line up the social icons 
    in a row (rather than stack them) when on small devices
    
 




