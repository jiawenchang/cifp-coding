$(document).ready(function () {
    var timerDuration = 60; // in seconds

    setInterval(function () {
        var minutes = parseInt(timerDuration / 60, 10); // this means divide by 60 and let the value be in decimal

        var seconds = parseInt(timerDuration % 60, 10); // we get the modulus to get the number of seconds remaining

        // If the amount of minutes is less than 10, then show 0 minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // Similarly if the amount of seconds is less than 10, then show 0 seconds
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // We put the minutes and seconds into our CSS
        $('#time').text(minutes + ":" + seconds);
        // if the remainder of the timer is less than 0 if we were to decrement it, then set it to 0
        // Remember decrement means reduce by 1
        if (--timerDuration < 0) {
            timerDuration = 0;
        }
    }, 1000);
});