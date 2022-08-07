var timeDisplayEl = $('#currentDay');
var textEl = $('.textarea');

console.log(textEl);
textEl[0].setAttribute('class', 'future col-9 textarea');
// Handle displaying the time
function displayTime(){
    var currentDate = moment().format('dddd, MMMM D');
    timeDisplayEl.text(currentDate);
}

setInterval(displayTime, 1000);

// Handle the color of each text area
/*
function setColor(){
    var currentTime = moment().format('H');
    textEl.children(1).addClass("future");
}
setColor();*/