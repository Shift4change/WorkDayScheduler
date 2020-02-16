

var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];



// var now = moment().hour();
for (i = 0; i < timeArr.length; i++) {
    // var idStr = id.toString();
    var hours = document.getElementById("schedule");
    // var id = 9;
    // var idStr = id.toString();
    var newDiv = $("<div>");
    var time = $("<div>");
    var btn = $("<button>");
    var userInput = $("<input>");


    newDiv.addClass("class", "row");
    time.addClass("class", "col-1 time text-center");
    userInput.addClass("class", "col-10 event");
    btn.addClass("col-1 save-button")
    // userInput.attr("id", "text-input" + parseInt(timeArr[i]));




    var acum = moment();
    var nuacum = moment(timeArr[i]);

    // console.log(nuacum)

    var intimp = nuacum.diff(acum, "minutes");
    console.log(intimp);


    if (intimp < -20) {
        userInput.attr("style", "background-color:red");
    } else if (intimp > 0) {
        userInput.attr("style", "background-color:green");
    } 



    // time.text(timeArr[i]);
    btn.text("save");

$(newDiv).append(JSON.stringify(timeArr[i]));
$(hours).append(newDiv,time, userInput,btn);

//     .append(time, userInput, btn);
//     $("#row").append(newDiv)

}









// $("button").addClass("submit")
// btn.text("save");



$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));



