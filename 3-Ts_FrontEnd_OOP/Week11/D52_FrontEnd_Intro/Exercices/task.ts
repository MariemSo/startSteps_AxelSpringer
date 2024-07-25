interface TaskInfo {
  title: string;
  completed: boolean;
}

class Task {
  title: string;
  completed: boolean;

  constructor(title: string, completed: boolean) {
    this.title = title;
    this.completed = completed;
  }

  displayTask(param: TaskInfo): void {
    console.log(param.completed, param.title);
  }

  markCompleted() {
    this.completed = true;
  }

  showDetails() {
    console.log(`Title: ${this.title}, Completed: ${this.completed}`);
  }
}

const tasks: TaskInfo[] = [
  { title: "Complete assignment", completed: false },
  { title: "Submit project proposal", completed: true },
  { title: "Review peers work", completed: false },
];

function displayTask(
  tasks: TaskInfo[],
  completedFilter: "all" | "completed" | "incomplete"
): void {
  const taskList: HTMLElement | null = document.getElementById("task-list");

  if (taskList) {
    taskList.innerHTML = ""; // Clear previous tasks

    tasks.forEach((task) => {
      if (
        completedFilter === "all" ||
        (completedFilter === "completed" && task.completed) ||
        (completedFilter === "incomplete" && !task.completed)
      ) {
        const taskElement = document.createElement("li");
        taskElement.className = "task";
        taskElement.textContent = `Task: ${task.title} | Completed: ${
          task.completed ? "Yes" : "No"
        }`;

        if (task.completed) {
          taskElement.classList.add("completed");
        }

        taskList.appendChild(taskElement);
      }
    });
  }
}

// Event listeners for filter buttons
const showAllBtn = document.getElementById("showAllBtn");
if (showAllBtn) {
  showAllBtn.addEventListener("click", () => {
    displayTask(tasks, "all");
  });
}

const showCompletedBtn = document.getElementById("showCompletedBtn");
if (showCompletedBtn) {
  showCompletedBtn.addEventListener("click", () => {
    displayTask(tasks, "completed");
  });
}

const showIncompleteBtn = document.getElementById("showIncompleteBtn");
if (showIncompleteBtn) {
  showIncompleteBtn.addEventListener("click", () => {
    displayTask(tasks, "incomplete");
  });
}

// Initial display of tasks
displayTask(tasks, "all");
