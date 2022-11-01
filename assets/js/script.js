//Displays current date
var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
$("#currentDay").html(rightNow);


$(document).ready(function () {
    // Save button
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // saves items to local storage
        localStorage.setItem(time, text);
    })

    function taskTracker() {

        var currentTask = moment().hour();
        $(".time-block").each(function () {
            var savedBlock = parseInt($(this).attr("id").split("hour")[1]);
            // checks time and adds class for background colors
            if (savedBlock < currentTask) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (savedBlock === currentTask) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }

    // pulls any stored items from local storage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    taskTracker();


})