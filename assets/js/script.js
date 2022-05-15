//variables
var currentDateEl = $("#currentDay");

//set current date
var setDate = function() {
var m = moment().format("dddd, MMMM Do");
currentDateEl.text(m);
};

var currentTime = moment().format("H");
if (currentTime == "16") {
    console.log("It's 4 0'clock!");
};

//function that sets the color by time
var setRowColor = function() {
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



//functions that save the time with its text area to local storage
var setText9AM = function(){
    var text = $("#text9AM").val();
   localStorage.setItem('9AM',text);
   $("#btn9AM").on("click", setText9AM);
};


// var setText10AM = function(){
//     var text = $("#text10AM").val().trim();
//      localStorage.setItem('10AM',text);
//     };
//  $("#btn10AM").on("click", setText10AM());

//  var setText11AM = function(){
//     var text = $("#text11AM").val().trim();
//      localStorage.setItem('11AM',text);
//     };
//  $("#btn11AM").on("click", setText11AM());

//  var setText12PM = function(){
//     var text = $("#text12PM").val().trim();
//      localStorage.setItem('12PM',text);
//     };
//  $("#btn12PM").on("click", setText12PM());

//  var setText1PM = function(){
//     var text = $("#text1PM").val().trim();
//      localStorage.setItem('1PM',text);
//     };
//  $("#btn1PM").on("click", setText1PM());

//  var setText2PM = function(){
//     var text = $("#text2PM").val().trim();
//      localStorage.setItem('2PM',text);
//     };
//  $("#btn2PM").on("click", setText2PM());

//  var setText3PM = function(){
//     var text = $("#text3PM").val().trim();
//      localStorage.setItem('3PM',text);
//     };
//  $("#btn3PM").on("click", setText3PM());

//  var setText4PM = function(){
//     var text = $("#text4PM").val().trim();
//      localStorage.setItem('4PM',text);
//     };
//  $("#btn4PM").on("click", setText4PM());

//  var setText5PM = function(){
//     var text = $("#text5PM").val().trim();
//      localStorage.setItem('5PM',text);
//     };
//  $("#btn5PM").on("click", setText5PM());

// function that retrieves the text from localstorage
var loadText9AM = function(){
var text = $("#text9AM").val();
$("#text9AM").append(localStorage.getItem(text));
};


//calling functions
setDate();
setRowColor();

//something isn't right about this, need help!
setInterval(setRowColor(), 3600000);