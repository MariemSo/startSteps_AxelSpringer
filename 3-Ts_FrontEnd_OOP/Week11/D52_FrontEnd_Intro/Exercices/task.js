var Task = /** @class */ (function () {
    function Task(title, completed) {
        this.title = title;
        this.completed = completed;
    }
    Task.prototype.displayTask = function (param) {
        console.log(param.completed, param.title);
    };
    Task.prototype.markCompleted = function () {
        this.completed = true;
    };
    Task.prototype.showDetails = function () {
        console.log("Title: ".concat(this.title, ", Completed: ").concat(this.completed));
    };
    return Task;
}());
var tasks = [
    { title: "Complete assignment", completed: false },
    { title: "Submit project proposal", completed: true },
    { title: "Review peers work", completed: false },
];
function displayTask(tasks, completedFilter) {
    var taskList = document.getElementById("task-list");
    if (taskList) {
        taskList.innerHTML = ""; // Clear previous tasks
        tasks.forEach(function (task) {
            if (completedFilter === "all" ||
                (completedFilter === "completed" && task.completed) ||
                (completedFilter === "incomplete" && !task.completed)) {
                var taskElement = document.createElement("li");
                taskElement.className = "task";
                taskElement.textContent = "Task: ".concat(task.title, " | Completed: ").concat(task.completed ? "Yes" : "No");
                if (task.completed) {
                    taskElement.classList.add("completed");
                }
                taskList.appendChild(taskElement);
            }
        });
    }
}
// Event listeners for filter buttons
var showAllBtn = document.getElementById("showAllBtn");
if (showAllBtn) {
    showAllBtn.addEventListener("click", function () {
        displayTask(tasks, "all");
    });
}
var showCompletedBtn = document.getElementById("showCompletedBtn");
if (showCompletedBtn) {
    showCompletedBtn.addEventListener("click", function () {
        displayTask(tasks, "completed");
    });
}
var showIncompleteBtn = document.getElementById("showIncompleteBtn");
if (showIncompleteBtn) {
    showIncompleteBtn.addEventListener("click", function () {
        displayTask(tasks, "incomplete");
    });
}
// Initial display of tasks
displayTask(tasks, "all");
