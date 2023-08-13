document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete")) {
            event.target.parentElement.remove();
        } else if (event.target.tagName === "SPAN") {
            event.target.classList.toggle("completed");
        }
    });
});