// Handle time display change per second
const timeDisplayEl = $('#time-display');
function displayTime() {
    const rightNow = moment().format('LLL');
    timeDisplayEl.text(rightNow);
  }

// Handle button click event to save to localStorage 
    $(".saveBtn").on("click", function (e) { 
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });

    // Handle collecting userInput values in localStorage and displaying
  $(document).ready(function () {
    keys = Object.keys(localStorage);
for (let i = 0; i < keys.length; i++) {
    const value = localStorage.getItem(keys[i]);
    const userInput = $("#" + keys[i]).find("textArea")
    userInput.val(value);
}

// Handle colour change based on time change
        var currentHours = moment().hours();
        
        $(".time-block").each(function () {
            var hourEl = $(this).attr("id");
            var hourDay = hourEl.substring(5, hourEl.length);
            var intHourDay = parseInt(hourDay)
            var intCurrentHours = parseInt(currentHours);
            if (parseInt(intHourDay) < parseInt(intCurrentHours)) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (parseInt(intHourDay) > parseInt(intCurrentHours)) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
            else if (parseInt(intHourDay) === parseInt(intCurrentHours)) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            }
        })
});
    
setInterval(displayTime, 1000);