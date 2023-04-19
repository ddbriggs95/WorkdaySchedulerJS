// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {

  //added in Current day to header of page
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));

  //save'saveBtn' as a variable to be used
  var saveBtn = $('.saveBtn');

  //create array of input elements
  var hourInput = $('.description');
  //save timeblocks into single variables for each input into text area elements
  var hour9Input = $('#hour-9 .description');
  var hour10Input = $('#hour-10 .description');
  var hour11Input = $('#hour-11 .description');
  var hour12Input = $('#hour-12 .description');
  var hour1Input = $('#hour-1 .description');
  var hour2Input = $('#hour-2 .description');
  var hour3Input = $('#hour-3 .description');
  var hour4Input = $('#hour-4 .description');
  var hour5Input = $('#hour-5 .description');
  var timeBlock = $(".time-block");

//Display current hour and day in header
  var currentHour = dayjs().format('HH');
  
  //for loop to target save buttons and apply past, present, future
  //set item into localstorage or get from local storage as iterating through for loop
  for (let i = 0; i < 9; i++) {
    console.log(hourInput[i].parentElement)
    if (currentHour == (i+9)) {
     hourInput[i].parentElement.setAttribute("class", 'row time-block present');
    } else if (currentHour < (i+9)) {
      hourInput[i].parentElement.setAttribute("class", 'row time-block future');
    } else if (currentHour > (i+9)) {
      hourInput[i].parentElement.setAttribute("class", 'row time-block past');
    }
    hourInput[i].value = localStorage.getItem(`hour${i+9}`);
    saveBtn[i].addEventListener('click', function (event) {
      var inputHour = hourInput[i].value;
      console.log(inputHour, hourInput[i])
      //set item into localstorage (using template literals with tutor)
      localStorage.setItem(`hour${i+9}`, inputHour);

    })
  
  }



});

/////////////////////////////////////////////////////////
//used above method because this is extremely repetitive//
////////////////////////////////////////////////////////
//Event listener for clicking hour10 save button
// saveBtn.on('click', function(event) {
//   event.preventDefault();
//   hour10Val = hour10Input.val();
//   console.log(hour10Val);
//   //set item into localstorage
//   localStorage.setItem("hour10", hour10Val);
//   });

//   //Event listener for clicking hour11 save button
// saveBtn.on('click', function(event) {
//   event.preventDefault();
//   hour11Val = hour11Input.val();
//   console.log(hour11Val);
//   //set item into localstorage
//   localStorage.setItem("hour11", hour11Val);
//   });


//   //Event listener for clicking hour12 save button
// saveBtn.on('click', function(event) {
//   event.preventDefault();
//   hour12Val = hour12Input.val();
//   console.log(hour12Val);
//   //set item into localstorage
//   localStorage.setItem("hour12", hour12Val);
//   });


//   //Event listener for clicking hour1 save button
// saveBtn.on('click', function(event) {
//   event.preventDefault();
//   hour1Val = hour1Input.val();
//   console.log(hour1Val);
//   //set item into localstorage
//   localStorage.setItem("hour1", hour1Val);
//   });

//   //Event listener for clicking hour2 save button
// saveBtn.on('click', function(event) {
//   event.preventDefault();
//   hour2Val = hour2Input.val();
//   console.log(hour2Val);
//   //set item into localstorage
//   localStorage.setItem("hour2", hour2Val);
//   });

// //Event listener for clicking hour3 save button
// saveBtn.on('click', function(event) {
//   event.preventDefault();
//   hour3Val = hour3Input.val();
//   console.log(hour3Val);
//   //set item into localstorage
//   localStorage.setItem("hour3", hour3Val);
//   });

//   //Event listener for clicking hour4 save button
// saveBtn.on('click', function(event) {
//   event.preventDefault();
//   hour4Val = hour4Input.val();
//   console.log(hour4Val);
//   //set item into localstorage
//   localStorage.setItem("hour4", hour4Val);
//   });

//   //Event listener for clicking hour5 save button
// saveBtn.on('click', function(event) {
//   event.preventDefault();
//   hour5Val = hour5Input.val();
//   console.log(hour5Val);
//   //set item into localstorage
//   localStorage.setItem("hour5", hour5Val);
//   });

//set up past,present,future textarea through comparing to currentHour



  //


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

// });
