

var timeArr = [9,10,11,12,13,14,15,16,17,18];


    var id = 9;
    var now = moment().hour();

for (i=0; i<timeArr.length; i++){
    var idStr = id.toString();
    var hours = document.getElementById("schedule");
    
    var newDiv = $("<div>");
    var time = $("<time>");
    var btn = $("<button>");
    var userInput = $("<input>");

    $("button").addClass("submit")
    btn.text("save");

    $(newDiv).append(JSON.stringify(timeArr[i]));
    $(hours).append(newDiv,time, userInput,btn);
}

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));