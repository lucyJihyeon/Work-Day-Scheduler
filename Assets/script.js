var dateDisplayEl = $('#currentDay');
var saveBtn = $(".saveBtn");

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  displayDate();

  function saveworkToStorage(event)  {
    //get the closest id of the '.time-block' class to identify what time
    var whatTime = $(event.target).closest('.time-block').id;
    //get the userinput by find the '.description' class and get the value
    var usertext = $(event.target).closest('.time-block').find('.description').val();
    //get works from localStorage, if empty then create a new array
    var workitems = JSON.parse(localStorage.getItem('works')) || [];
    //add the user input into the workitems retrieved from the localStorage 
    workitems.push({
      time: whatTime,
      details: usertext
    });
    //update localStorage 
    localStorage.setItem("works", JSON.stringify(workitems));

  }
  
  saveBtn.on("click", saveworkToStorage);
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    function displayDate()  {
      var today = dayjs().format("dddd, MMMM D[th]");
      dateDisplayEl.text(today);
    }

  });
  