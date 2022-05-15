## Work-Day-Scheduler

## Description

This project was created to allow an employee with a busy schedule to manage their time effectively by adding events to a dynamic daily planner. The requirements for this project were as follows:
* When the planner site is visited, the current day is displayed at the top of the page.
* When the user scrolls down, the time blocks are shown from 9AM to 5PM (the standard business hours).
* When the user views the time blocks, they are color coded to show that the time is past, present, or future.
* When the user clicks in each time block, they can enter an event via text.
* When the user clicks the save button for that time block, the text is saved in local storage.
* When the user refreshes the page, the events remain/are loaded from local storage.


1. Checked out the HTML, there's a space for the time blocks, but it is empty
a. Thinking should create rows () with columns that have two columns, one that is 1, a 6, and a 1? The 1 will have the time and the 6 will have the input space, textarea, the last 1 the save button. 
2. Checked out the CSS, see comments
3. I see the icons CDN loaded so we can get the save icon from there
4. Will definitely be using Moment to show the date and it should be updating it every 30 minutes?


START with hardcoding the HTML, make sure there are spaces for everything you will want to add dynamically, like the times and dates

Then go into the JS file and set up the selectors (places for the times and dates, text area, dynamic coloring, save button for localStorage). 