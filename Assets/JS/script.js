
var saveButton = document.querySelector("#save-Btn");

//get time from momentJS
var Time = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(Time);
//add time to currentDay
$("#currentDay").html(Time)

//save textarea input for each time block
var timeBlock = function() {

  $('#hour-9am .description').val(localstorage.getItem('hour-9am'));
  $('#hour-10am .description').val(localstorage.getItem('hour-10am'));
  $('#hour-11am .description').val(localstorage.getItem('hour-11am'));
  $('#hour-12pm .description').val(localstorage.getItem('hour-12pm'));
  $('#hour-1pm .description').val(localstorage.getItem('hour-1pm'));
  $('#hour-2pm .description').val(localstorage.getItem('hour-2pm'));
  $('#hour-3pm .description').val(localstorage.getItem('hour-3pm'));
  $('#hour-4pm .description').val(localstorage.getItem('hour-4pm'));
  $('#hour-5pm .description').val(localstorage.getItem('hour-5pm'));

}

saveButton.addEventListener("click", timeBlock)




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


 



// setTime(function() {
//   //onclick for the button

//   //savelitextcontent

//   //varTime: time

//   //localstorage.setItem(time,textcontent)

// });



