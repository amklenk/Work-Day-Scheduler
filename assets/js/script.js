//variables
var currentDateEl = $("#currentDay");

//set current date
function setDate() {
    var m = moment().format("dddd, MMMM Do");
    currentDateEl.text(m);
};

var currentTime = moment().format("H");
if (currentTime == "16") {
    console.log("It's 4 0'clock!");
};

//function that sets the color by time
function setRowColor() {
    var currentTime = moment().format("H");
    if (currentTime == "24") {
        $("#9AM").removeClass("past");
        $("#9AM").addClass("future");
        $("#10AM").removeClass("past");
        $("#10AM").addClass("future");
        $("#11AM").removeClass("past");
        $("#11AM").addClass("future");
        $("#12PM").removeClass("past");
        $("#12PM").addClass("future");
        $("#1PM").removeClass("past");
        $("#1PM").addClass("future");
        $("#2PM").removeClass("past");
        $("#2PM").addClass("future");
        $("#3PM").removeClass("past");
        $("#3PM").addClass("future");
        $("#4PM").removeClass("past");
        $("#4PM").addClass("future");
        $("#5PM").removeClass("past");
        $("#5PM").addClass("future");
    } else if (currentTime == "9") {
        $("#9AM").removeClass("future");
        $("#9AM").addClass("present");
        $("#10AM").removeClass("past");
        $("#10AM").addClass("future");
        $("#11AM").removeClass("past");
        $("#11AM").addClass("future");
        $("#12PM").removeClass("past");
        $("#12PM").addClass("future");
        $("#1PM").removeClass("past");
        $("#1PM").addClass("future");
        $("#2PM").removeClass("past");
        $("#2PM").addClass("future");
        $("#3PM").removeClass("past");
        $("#3PM").addClass("future");
        $("#4PM").removeClass("past");
        $("#4PM").addClass("future");
        $("#5PM").removeClass("past");
        $("#5PM").addClass("future");
    } else if (currentTime == "10") {
        $("#9AM").removeClass("present");
        $("#9AM").addClass("past");
        $("#10AM").removeClass("future");
        $("#10AM").addClass("present");;
        $("#11AM").removeClass("past");
        $("#11AM").addClass("future");
        $("#12PM").removeClass("past");
        $("#12PM").addClass("future");
        $("#1PM").removeClass("past");
        $("#1PM").addClass("future");
        $("#2PM").removeClass("past");
        $("#2PM").addClass("future");
        $("#3PM").removeClass("past");
        $("#3PM").addClass("future");
        $("#4PM").removeClass("past");
        $("#4PM").addClass("future");
        $("#5PM").removeClass("past");
        $("#5PM").addClass("future");
    } else if (currentTime == "11") {
        $("#10AM").removeClass("present");
        $("#10AM").addClass("past");
        $("#11AM").removeClass("future");
        $("#11AM").addClass("present");
        $("#12PM").removeClass("past");
        $("#12PM").addClass("future");
        $("#1PM").removeClass("past");
        $("#1PM").addClass("future");
        $("#2PM").removeClass("past");
        $("#2PM").addClass("future");
        $("#3PM").removeClass("past");
        $("#3PM").addClass("future");
        $("#4PM").removeClass("past");
        $("#4PM").addClass("future");
        $("#5PM").removeClass("past");
        $("#5PM").addClass("future");
    } else if (currentTime == "12") {
        $("#11AM").removeClass("present");
        $("#11AM").addClass("past");
        $("#12PM").removeClass("future");
        $("#12PM").addClass("present");
        $("#1PM").removeClass("past");
        $("#1PM").addClass("future");
        $("#2PM").removeClass("past");
        $("#2PM").addClass("future");
        $("#3PM").removeClass("past");
        $("#3PM").addClass("future");
        $("#4PM").removeClass("past");
        $("#4PM").addClass("future");
        $("#5PM").removeClass("past");
        $("#5PM").addClass("future");
    } else if (currentTime == "13") {
        $("#12PM").removeClass("present");
        $("#12PM").addClass("past");
        $("#1PM").removeClass("future");
        $("#1PM").addClass("present");
        $("#2PM").removeClass("past");
        $("#2PM").addClass("future");
        $("#3PM").removeClass("past");
        $("#3PM").addClass("future");
        $("#4PM").removeClass("past");
        $("#4PM").addClass("future");
        $("#5PM").removeClass("past");
        $("#5PM").addClass("future");
    } else if (currentTime == "14") {
        $("#1PM").removeClass("present");
        $("#1PM").addClass("past");
        $("#2PM").removeClass("future");
        $("#2PM").addClass("present");
        $("#3PM").removeClass("past");
        $("#3PM").addClass("future");
        $("#4PM").removeClass("past");
        $("#4PM").addClass("future");
        $("#5PM").removeClass("past");
        $("#5PM").addClass("future");
    } else if (currentTime == "15") {
        $("#2PM").removeClass("present");
        $("#2PM").addClass("past");
        $("#3PM").removeClass("future");
        $("#3PM").addClass("present");
        $("#4PM").removeClass("past");
        $("#4PM").addClass("future");
        $("#5PM").removeClass("past");
        $("#5PM").addClass("future");
    } else if (currentTime == "16") {
        $("#3PM").removeClass("present");
        $("#3PM").addClass("past");
        $("#4PM").removeClass("future");
        $("#4PM").addClass("present");
        $("#5PM").removeClass("past");
        $("#5PM").addClass("future");
    } else if (currentTime == "17") {
        $("#4PM").removeClass("present");
        $("#4PM").addClass("past");
        $("#5PM").removeClass("future");
        $("#5PM").addClass("present");
    };
};

//interval to update row colors
setInterval(setRowColor(), 3600000);

//function that saves the time with its text area to local storage
$(".saveBtn").on("click", function(){
    var activity = $(this).parent().siblings(".textcol").children().val().trim();
    var hourKey = $(this).attr("id").split("-")[1];
    localStorage.setItem(hourKey, activity);
});


// function that retrieves the text from local storage for each row
function loadText() {
$(".time-block").each(function(){
    var textEl = $(this).children(".textcol").children();
    console.log(textEl);
    var hour = $(this).children(".textcol").children().attr("id").split("-")[1];
    console.log(hour);
    var loadText = localStorage.getItem(hour);
    $(textEl).val(loadText);
})
}

//calling functions
setDate();
setRowColor();
loadText();
