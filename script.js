// Function to update content based on the current hour of the day and day of the week
function updateContent() {
    const date = new Date();
    const currentHour = date.getHours();
    const currentDayOfWeek = date.getDay(); // 0 (Sunday) to 6 (Saturday)

    // Define time blocks with tasks/actions and descriptions for each hour of the day for all seven days of the week
    const timeBlocks = [
        // Sunday
        { dayOfWeek: 0, startHour: 0, endHour: 1, task: "Relaxing morning", description: "Enjoy a slow start to the day" },
        { dayOfWeek: 0, startHour: 1, endHour: 2, task: "Meditation", description: "Clear your mind and focus" },
        // Monday
        { dayOfWeek: 1, startHour: 0, endHour: 1, task: "Rest", description: "Take a break and recharge" },
        { dayOfWeek: 1, startHour: 1, endHour: 2, task: "Sleep", description: "Get some restful sleep" },
        // Tuesday
        { dayOfWeek: 2, startHour: 0, endHour: 1, task: "Rest", description: "Take a break and recharge" },
        { dayOfWeek: 2, startHour: 1, endHour: 2, task: "Sleep", description: "Get some restful sleep" },
        // Wednesday
        { dayOfWeek: 3, startHour: 0, endHour: 1, task: "Rest", description: "Take a break and recharge" },
        { dayOfWeek: 3, startHour: 1, endHour: 2, task: "Sleep", description: "Get some restful sleep" },
        // Thursday
        { dayOfWeek: 4, startHour: 0, endHour: 1, task: "Rest", description: "Take a break and recharge" },
        { dayOfWeek: 4, startHour: 1, endHour: 2, task: "Sleep", description: "Get some restful sleep" },
        // Friday
        { dayOfWeek: 5, startHour: 0, endHour: 1, task: "Rest", description: "Take a break and recharge" },
        { dayOfWeek: 5, startHour: 1, endHour: 2, task: "Sleep", description: "Get some restful sleep" },
        // Saturday
        { dayOfWeek: 6, startHour: 0, endHour: 1, task: "Rest", description: "Take a break and recharge" },
        { dayOfWeek: 6, startHour: 1, endHour: 2, task: "Sleep", description: "Get some restful sleep" },
    ];

    let currentTask = "NO SET TASK"; // Default task if no specific block matches
    let currentDescription = "Go wild I guess"; // Default description if no specific block matches

    timeBlocks.forEach(block => {
        if (block.dayOfWeek === currentDayOfWeek && currentHour >= block.startHour && currentHour < block.endHour) {
            currentTask = block.task;
            currentDescription = block.description;
        }
    });

    // Update the content on the webpage
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <div class="task">${currentTask}</div>
        <div class="description">${currentDescription}</div>
    `;

    // New code for debugging: Log current hour, day of the week, task, and description
    console.log("Current Hour:", currentHour);
    console.log("Current Day of Week:", currentDayOfWeek);
    console.log("Current Task:", currentTask);
    console.log("Current Description:", currentDescription);
}

// Update content initially
updateContent();

// Update content every minute
setInterval(updateContent, 60000);

// Creating 24-hour clock

function displayTime() {
    var d = new Date();
    var hour = d.getHours(); // 0-23
    var min = d.getMinutes(); // 0-59
    var amOrPm = ""; // No need for AM/PM in 24-hour format

    // No need to check for AM/PM in 24-hour format

    // Ensure hour and minute are always two digits
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }

    document.getElementById("clock").innerHTML = hour + ":" + min + " " + amOrPm;
}

// Initial call to display time
displayTime();

// Update time every minute
setInterval(displayTime, 60000);
