var dateDisplayEl = $('#currentDay');
var saveBtn = $(".saveBtn");
var idHours = [];
var idNumbers = [];


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  displayDate();
  displaywork();
  workTime();
  //The purpose of this function is to save the user input into the localStorage 
  //and display confirm message on the screen
  function saveworkToStorage(event)  {
    //hide the previous 'section' class to prevent duplicated text
    $('section').hide();
    //create container to store the text
    //add css style to set the items in the middle 
    var container = $('<section>').css({
      "display":"flex",
      "justify-content": "center",
      "align-items": "center"
    });
    var saveConfirm = $('<p>').css("margin", "0");
    var localstorage = $('<span>').text("localStorage").addClass('localStorage-color');
    var checkmark = $('<i>').addClass("fa fa-check").css("margin-left", "5px");
    saveConfirm.text("Appointment Added to ");
    saveConfirm.append(localstorage);
    saveConfirm.append(checkmark);
    container.append(saveConfirm);
    //prepend the container into the container-lg
    $('.container-lg').prepend(container);
    //get the closest class of time-block from the targetted event element and retrieve the id 
    var whatTime = $(event.target).closest('.time-block').attr('id');
    //get the userinput by find the '.description' class and get the value
    var usertext = $(event.target).closest('.time-block').find('.description').val();
    //update localStorage 
    localStorage.setItem(whatTime, usertext);
  }


  //The purpose of the function is to display the stored values 
  function displaywork()  {
    //retrieve datas of "hour-9" from the localStorage 
    var work9 = localStorage.getItem('hour-9');
    //call the discription box inside of the hour-9 id element
    var detail9 = $('#hour-9 .description');
    //set the value of the textarea 
    detail9.val(work9);
    
    //repeat until hour-17
    var work10 = localStorage.getItem('hour-10');
    var detail10 = $('#hour-10 .description');
    detail10.val(work10);

    var work11 = localStorage.getItem('hour-11');
    var detail11 = $('#hour-11 .description');
    detail11.val(work11);

    var work12 = localStorage.getItem('hour-12');
    var detail12 = $('#hour-12 .description');
    detail12.val(work12);

    var work13 = localStorage.getItem('hour-13');
    var detail13 = $('#hour-13 .description');
    detail13.val(work13);

    var work14 = localStorage.getItem('hour-14');
    var detail14 = $('#hour-14 .description');
    detail14.val(work14);

    var work15 = localStorage.getItem('hour-15');
    var detail15 = $('#hour-15 .description');
    detail15.val(work15);

    var work16 = localStorage.getItem('hour-16');
    var detail16 = $('#hour-16 .description');
    detail16.val(work16);

    var work17 = localStorage.getItem('hour-17');
    var detail17 = $('#hour-17 .description');
    detail17.val(work17);
  }
  
 
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    saveBtn.on("click", saveworkToStorage);

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //

    //The purpose of this function is to compare the current hour and each of the time-block's 
    //assigned hour and add class of the past, present or futhre accordingly. 
    function workTime() {
      //take the current time using dayjs and format it to the military time(just the hour)
      var workDate = dayjs().format("HH");
      //convert it to the number 
      workDate = parseInt(workDate,10);
      //take all the "time-block" classes and store them into an array, idNumber
      var idNumber = document.querySelectorAll(".time-block");
      //loop through each item of the idNumber array 
      for (var i =0; i < idNumber.length;i++) {
        //take the id value of each item and split it by '-' 
        var idSplit = ((idNumber[i].id).split('-'));
        //becaise the id is fromed ("hour-x"), there will be two items 
        if (idSplit.length > 1) {
          //splice the first item by 1 ("hour")
          idSplit.splice(0,1);
          //push each spliced array into the idHours array 
          idHours.push(idSplit)
        }
      }
      
      //loop through each item of the idHours array
      for (i=0; i< idHours.length; i++) {
        //if the value in idHours is less than the current hour, add class of 'past' to the idNumber[i]
        if(idHours[i] < workDate)  {
          idNumber[i].classList.add('past');
        }
        //if the value in idHours is equal to the current hour, add class of 'present' to the idNumber[i]
        if(idHours[i] == workDate)  {
          idNumber[i].classList.add('present');
        }
        //if the value in idHours is greater than the current hour, add class of 'future' to the idNumber[i]
        if(idHours[i] > workDate) {
          idNumber[i].classList.add('future');
        }
      }
    }

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    
    // TODO: Add code to display the current date in the header of the page.
    //The purpose of this function is to display the current date in the header of the page
    function displayDate()  {
      //retreive the current date from dayjs method and format the value 
      var today = dayjs().format("dddd, MMMM D[th]");
      //add text of today's value to the displayEl 
      dateDisplayEl.text(today);
    }

    //when the save icon is clicked, change style
    function saveClickHandler() {
      //store this(.fa-save element) into the variable $this for the setTimeout function 
      var $this = $(this);
      $this.css({
        "font-size":"larger",
        "color":"white"
      });
      //style go back to its default after 0.8 seconds.
      setTimeout(function () {
        $this.css({
          "font-size":"initial",
          "color":"black"
        });
      }, 800);
    }
    
    //Adding EventListner for the save icon 
    $(".fa-save").on("click",saveClickHandler)
    


  });
  