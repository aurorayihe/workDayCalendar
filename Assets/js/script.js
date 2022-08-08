var timeDisplayEl = $('#currentDay');
var textEl = $('.textarea');
var timeEl = $('.hour');
var saveBtnEl = $('.saveBtn');

// Handle displaying the time
function displayTime(){
    var currentDate = moment().format('dddd, MMMM D');
    timeDisplayEl.text(currentDate);
}

setInterval(displayTime, 1000);


// Handle the color of each text area
function setColor(){
    var currentTime = moment().format('H');
    for (let i = 0; i < textEl.length; i++){
        var time = timeEl[i].getAttribute("data-time");
        if (currentTime < time){
            textEl[i].setAttribute('class', 'future col-9 textarea');
        } else if (currentTime == time){
            textEl[i].setAttribute('class', 'present col-9 textarea');
        } else {
            textEl[i].setAttribute('class', 'past col-9 textarea');
        }
    }
}

setColor();
// handle to do submission
var content = [];
var times = ["09", "10", "11", "12", "13", "14","15","16","17"];
saveBtnEl.on("click", saveContent);

function saveContent(event){
    content = JSON.parse(localStorage.getItem("content"));
    var btnClicked = $(event.target);
    var time = btnClicked[0].getAttribute("data-time");
    var input = btnClicked.parent().find("input").val();
    if (input == ""){
        return;
    }
    else{
        btnClicked.parent().find("input").val(input);
        content.push({clickTime:time, textInput: input});
        storeLocal();
        renderInput();
    }

}

function storeLocal(){
    localStorage.setItem("content", JSON.stringify(content));
}

function renderInput(){
    var currentContentJSON = localStorage.getItem("content");
    var currentContent=JSON.parse(currentContentJSON);
    console.log(currentContent);
    for(let i = 0; i < currentContent.length; i++){
        var currentItem = currentContent[i];
        let input = currentItem.textInput;
        let j = times.indexOf(currentItem.clickTime);
        textEl = $('.textarea'); 
        textEl[j].setAttribute('value', input);
    }
}

renderInput();
