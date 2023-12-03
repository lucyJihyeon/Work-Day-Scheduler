# Work-Day-Scheduler

## Description 
This is a daily work scheduler application designed for users to input their daily tasks for each hour of a typical working day (9am - 5pm) This app provides features to save appointments locally and display the tasks with different background color based on the current time to represent past, present, and future tasks. 

## Table of Contents 
- [Features](#features)
- [Technologies-Used](#technologies)
- [Usage](#usage)
- [Preview](#preview)
- [Link](#link)

## Features 

## Display Current Date 

### User Story 
    As a user, 
    I WANT TO be presented the current date 
    SO THAT I can easily keep track of the date and daily tasks 

### Accepted Critera 
    - Given I am visiting the work day scheduler
    - When I start the application 
    - Then I view the current date in a format; [day, Month, date]

## Time based Styling 

### User Story 
    As a user,
    I WANT visual differences between past, currnet, and future tasks 
    SO THAT I can easily figure out what are past, current, and future tasks are. 

### Accepted Criteria 
    - Given I am creating a work day scheduler 
    - When I am presented the daily tasks 
    - Then the background of each past-hour input box is grey,
    - the background of current-hour input box is red,
    - and the backgound of future-hour input box is green

## Local Storage 

### User Story 
    As a user, 
    I WANT TO save my input appointments for specific time slots locally 
    SO THAT I don't lose any of the appointments even after I reload the application 

### Accepted Criteria 
    - When I hit the save button for each input box 
    - Then, I can see the tasks description for specific time stored in the local storage 
    = When I reload the application 
    - Then the saved tasks display on each of the input box 

## Technologies 
- HTML 
- CSS
- JavaScript 
    - Bootstraps : used to add styles ; buttons and time blocks
    - FontAwesome : used to add 'save' icon 
    - Dayjs : used to compare the current hour to each time slot and to display the current date
    - Jquery : used to interact with HTML elements and manage events 

## Usage 

1. Open the work day scheduler 
2. enter the daily work tasks based on each time slot 
3. hit the save button 
4. check the local storage to see the saved work description 
5. check the background color of each input box. 
    grey: past 
    red: present 
    green: future 

## preview 
This is the preview of the application 
![alt work-day-scheduler preview](./Assets/img/preview.gif)

## Link 
This is the link of the deployed webpage 
[Work-Day-Scheduler](https://lucyjihyeon.github.io/Work-Day-Scheduler/)

