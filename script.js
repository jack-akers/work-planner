var headerEl = $("#currentDay");
var timeBlocks = $(".time-block");
var saveEl = $(".saveBtn");
var todayIs = dayjs().format("dddd, MMMM D");


$(function plannerTime() {

  headerEl.text(todayIs);

  timeBlocks.each(function () {
    var timeBlockEl = $(this);
    var hour = parseInt(timeBlockEl.attr("id").replace("hour-", ""));
    var descriptionEl = timeBlockEl.find(".description");

    descriptionEl.val(localStorage.getItem("hour-" + hour));

    if (hour < dayjs().hour()) {
      timeBlockEl.addClass("past");
    } else if (hour === dayjs().hour()) {
      timeBlockEl.addClass("present");
    } else {
      timeBlockEl.addClass("future");
    }
  });

  saveEl.on("click", function () {
    var timeBlockEl = $(this).closest(".time-block");
    var hour = parseInt(timeBlockEl.attr("id").replace("hour-", ""));
    var descriptionEl = timeBlockEl.find(".description");

    localStorage.setItem("hour-" + hour, descriptionEl.val());
  });
});
