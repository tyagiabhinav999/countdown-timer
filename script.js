const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdown() {
    const options = { timeZone: "Asia/Kolkata" }; // Set the timezone to Kolkata
    
    const currentDate = new Date(); // Get the current date and time
    
    const newYearDate = new Date(Date.UTC(2024, 0, 1));
    
    time_in_ms = newYearDate - currentDate;
    
    days_remaining_fraction = (time_in_ms / (1000 * 60 * 60 * 24));
    days_remaining = Math.floor(days_remaining_fraction);
    
    hours_remaining_fraction = (days_remaining_fraction - days_remaining)*24;
    hours_remaining = Math.floor(hours_remaining_fraction);
    
    minutes_remaining_fraction = (hours_remaining_fraction - hours_remaining)*60;
    minutes_remaining = Math.floor(minutes_remaining_fraction);
    
    seconds_remaining_fraction = (minutes_remaining_fraction - minutes_remaining)*60;
    seconds_remaining = Math.floor(seconds_remaining_fraction);

    daysEl.innerHTML = days_remaining;
    hoursEl.innerHTML = hours_remaining;
    minutesEl.innerHTML = minutes_remaining;
    secondsEl.innerHTML = seconds_remaining;
}

countdown();

setInterval(countdown, 1000);





