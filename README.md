::::::::::::::::::::::::::::
:: 05-Work-day-scheduler :::
::::::::::::::::::::::::::::

## Deployed web address 
https://kyunginlee.github.io/05-daily-planner/

## Project Description
The aim was to create a daily planner for the busy person with multiple events through the day, to assist with time management and provide the function of moving events around to optimise their week.

## Functionality
WHEN the user opens the planner, the current day should be displayed at the top of the calendar.

WHEN the user scrolls down, they are presented with timeblocks for standard business hours with a container to place text which could be for events, reminders and ad-hoc notes.

WHEN the user views the timeblocks for that day, each timeblock is color coded to indicate whether it is in the past, present, or future.

WHEN the user clicks into a timeblock, they can enter an event and click a save button to save event. The text for that event should then be saved in local storage.

WHEN the user refreshes the page, the saved events persist for the current day.

## Actual Behaviour
WHEN the user opens the planner, the current day, date and time is displayed at the top of the calendar.The timeblocks are presented as expected, and users are able to click on the box to enter text, and save their input by clicking the save button.

![Alt Text](/assets/demo.gif)

## Development Process
Initial research conducted through reviewing other daily planner projects on github. On finding a public project which reflected the functionalities I needed for my daily planner, I began the process of (#1 learning each component, and optimising code through breaking down functions on gitmind and reviewing for opportunities to simplify /follow ideal naming conventions.

![Alt Text](/assets/gitmind.gif)

## Installation and usage Instructions
1) Enter https://kyunginlee.github.io/05-daily-planner/ into the web browser.
2) On the time an event needs to be added, click into the blank section which is boxed in by the time description and the save button and proceed to type text.
3) Click 'save' when you have completed entering text.
4) Proceed to fill other time blocks as required.

## Challenges
Main challenge with javascript heavy project was a combination of the syntax, order and nesting of functions and methods, and the concept of parent-sibling application of methods in some instances. As a starting point I reviewed existing examples available and broke down the javascript into sections and recorded my research with a mind mapping tool. This helped me immensely in visualising the order certain functions would be called. 

## Resources
