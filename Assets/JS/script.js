
//get time from momentJS
var Time = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(Time);
//add time to currentDay
$("#currentDay").html(Time)



//load to page
//save textarea input for each time block
$(document).ready(function(){

  //get date from local storage
  var savedSchedule = JSON.parse(localStorage.getItem("savedSchedule") || "{}");
  // select all textarea boxes
  var allTextAreas = $("textarea")

  // //loop over time slots (textarea)
   $.each(allTextAreas, function(index, object){
      //console.log(index, object)
      object = $(object)         // convert this into a jquery object
      console.log(index, object)
      // for each time slot, get the data-hour value for that timeslot (look at line 30)
      var currentHour = $(this).data('hour')   // test this with a console log
      
      //inside this loop we need to do another loop. We will loop over the items in savedSchedule
       $.each(savedSchedule, function(key, value) {  // these are called key, value specifically because we are looping over savedSchedule which is an object
          if(key == currentHour) {
            object.text(value);    // if key equals currentHour, set text of textarea box to the value
          }
       })
    })
})

        
// save to local storage
$(document).ready()

// select all buttons in jquery
var saveButtons = $('.button')
// loop over each of the buttons
saveButtons.each(function() {
  // attach event handler to each button so it does something when clicked
  $(this).click(function () {
    //traverse the DOM. Go sideways in HTML from the save button to the text area next to it
    //the textarea is a sibling of the save buton
    var hourText = $(this).siblings('textarea').val()
    console.log(hourText);
    
    // we are also going to get the data-hour attribute from the textarea box
    var currentHour = $(this).siblings('textarea').data('hour')
    console.log(currentHour);
    
    //get data from local storage
    var savedSchedule = JSON.parse(localStorage.getItem("savedSchedule") || "{}");
    // savedSchedule is going to look like this:
    // {"9": "breakfast", "12": "lunch", "2":"coffee"}
    savedSchedule[currentHour] = hourText;  // this is one way to save a key/value pair in an object

    //put savedSchedule back into local storage
    localStorage.setItem('savedSchedule', JSON.stringify(savedSchedule))

  })
})


// check current hour
var currentHour = moment().hour() 
  console.log(currentHour);

//loop time-blocks using class of description in textarea
$(".description").each(function(){
  var hour = $(this).data("hour");

  
  if(hour < currentHour) {

    //change css here .past
    $(this).addClass("past");

  }
  else if(hour == currentHour) {
    //change css here to .present
    $(this).addClass("present");

  }    //change css here to .future
  else{$(this).addClass("future");
  }

})


 







