// Handle time display change per second
const timeDisplayEl = $('#time-display');
function displayTime() {
    const rightNow = moment().format('LLL');
    timeDisplayEl.text(rightNow);
  }


// Handle button click event to save to localStorage 
    $(".saveBtn").on("click", function (e) { 
        const value = $(this).siblings(".textinput").val();
        const time = $(this).parent().attr("id");
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
        $(".time-block").each(function () {
            const currentHour = moment().hours();
            const hourEl = $(this).attr("id");
            console.log(hourEl)
            const hourDay = hourEl.substring(5, hourEl.length);
            console.log(hourDay)
            const intHourDay = parseInt(hourDay)
            console.log(intHourDay)
            const intCurrentHour = parseInt(currentHour);
            if (parseInt(intHourDay) < parseInt(intCurrentHour)) {
                $(this).addClass("past");
            }
            else if (parseInt(intHourDay) > parseInt(intCurrentHour)) {
                $(this).addClass("future");
            }
            else if (parseInt(intHourDay) === parseInt(intCurrentHour)) {
                $(this).addClass("present");
            }
        })
});
    
setInterval(displayTime, 1000);