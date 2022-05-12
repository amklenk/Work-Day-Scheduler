## Work-Day-Scheduler

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

1. Checked out the HTML, there's a space for the time blocks, but it is empty
a. Thinking should create rows () with columns that have two columns, one that is 1, a 6, and a 1? The 1 will have the time and the 6 will have the input space, textarea, the last 1 the save button. 
2. Checked out the CSS, see comments
3. I see the icons CDN loaded so we can get the save icon from there
4. Will definitely be using Moment to show the date and it should be updating it every 30 minutes?


START with hardcoding the HTML, make sure there are spaces for everything you will want to add dynamically, like the times and dates

Then go into the JS file and set up the selectors (places for the times and dates, text area, dynamic coloring, save button for localStorage). 