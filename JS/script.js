//Javascript Code Start
let addTaskBtn = document.getElementById("addTaskBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    // Task text span
    let span = document.createElement("span");
    span.textContent = taskText;

    // Toggle completed
    span.addEventListener("click", function () {
        span.classList.toggle("completed");
    });

    // Button group
    let btnGroup = document.createElement("div");

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "btn btn-warning btn-sm mx-2";

    editBtn.addEventListener("click", function () {
        if (editBtn.textContent === "Edit") {
            // Convert text to input
            let input = document.createElement("input");
            input.type = "text";
            input.value = span.textContent;
            input.className = "form-control form-control-sm";

            li.replaceChild(input, span);
            editBtn.textContent = "Save";

        } else {
            // Save edited text
            let input = li.querySelector("input");
            span.textContent = input.value.trim() || "Untitled Task";
            li.replaceChild(span, input);
            editBtn.textContent = "Edit";
        }
    });

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm mx-2 my-2";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);
    taskList.appendChild(li);

    taskInput.value = "";
});

