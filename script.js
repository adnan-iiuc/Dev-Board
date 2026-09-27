// ==============================
// DevBoard JavaScript
// ==============================


// ------------------------------
// 1. Select HTML Elements
// ------------------------------

const taskCount = document.querySelector("#task-count");

const currentDate = document.querySelector("#current-date");

const buttons = document.querySelectorAll(".task-card button");

const activityLog = document.querySelector(".activity-log");


// ------------------------------
// 2. Task Count
// ------------------------------

let remainingTasks = Number(taskCount.innerText);


// ------------------------------
// 3. Show Current Date
// ------------------------------

const today = new Date();

currentDate.innerText = today.toDateString();


// ------------------------------
// 4. Task Button Click
// ------------------------------

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        // Find the clicked task card
        const taskCard = button.parentElement;

        // Get task information
        const taskTitle = taskCard.querySelector("h3").innerText;

        const companyName = taskCard.querySelector("p").innerText;


        // --------------------------
        // Decrease Task Count
        // --------------------------

        if (remainingTasks > 0) {

            remainingTasks--;

            taskCount.innerText = remainingTasks;

        }


        // --------------------------
        // Disable Completed Button
        // --------------------------

        button.disabled = true;

        button.innerText = "Completed";


        // --------------------------
        // Create Activity
        // --------------------------

        const activity = document.createElement("div");

        activity.classList.add("activity");


        // --------------------------
        // Add Activity Content
        // --------------------------

        activity.innerHTML = `
            <p>${companyName}</p>
            <p>${taskTitle}</p>
            <span>Completed</span>
        `;


        // --------------------------
        // Add Activity to Activity Log
        // --------------------------

        activityLog.appendChild(activity);

    });

});