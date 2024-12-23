/// Step 1: Define the target date (25th of December in the current year)
const targetDate = new Date(new Date().getFullYear(), 11, 25, 0, 0).getTime(); // December 25th of the current year

// Step 2: Define the interval to update the countdown every 1000 milliseconds (1 second)
const countdown = setInterval(() => {
    // Step 3: Define the current time
    const now = new Date().getTime(); // Current time in milliseconds

    // Step 4: Calculate the time remaining
    const timeLeft = targetDate - now; // Time remaining in milliseconds

    // Step 5: Check if time is up and clear the interval
    if (timeLeft <= 0) {
        // Stop the countdown and display "Time's up!"
        clearInterval(countdown); // Clear the interval
        document.querySelector('.countdown').innerHTML = "<h2>Time's up!</h2>"; // Update the HTML
        console.log("Time's up! Countdown has stopped."); // Console statement when time's up
        return;
    }

    // Step 6: Calculate remaining days, hours, minutes, seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)); // Days
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Hours
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)); // Minutes
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000); // Seconds

    // Step 7: Update the HTML with the remaining time
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    // Step 8: Log the countdown progress to the console
    console.log(`Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`); // Log the remaining time to console
}, 1000); // 1000 ms = 1 second

// Step 9: Add a console statement to confirm the countdown is running
console.log("Countdown is running...");
