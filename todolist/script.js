document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");
  const completedTaskList = document.getElementById("completedTaskList");
  const errorMessage = document.getElementById("errorMessage");

  addTaskButton.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="task-circle"></span>
        <span class="task-text">${taskText}</span>
        <div class="task-actions">
          <button class="editButton">Edit</button>
          <button class="deleteButton">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
      taskInput.value = "";
      errorMessage.textContent = "";
    } else {
      errorMessage.textContent = "Please enter a task.";
    }
  });

  taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("editButton")) {
      const taskItem = event.target.parentElement.parentElement;
      const taskTextElement = taskItem.querySelector(".task-text");
      const editButton = taskItem.querySelector(".editButton");

      if (!taskItem.classList.contains("editing")) {
        taskItem.classList.add("editing");
        taskTextElement.contentEditable = true;
        taskTextElement.focus();
        editButton.textContent = "Save";
      } else {
        taskItem.classList.remove("editing");
        taskTextElement.contentEditable = false;
        editButton.textContent = "Edit";
      }
    } else if (event.target.classList.contains("deleteButton")) {
      const taskItem = event.target.parentElement.parentElement;
      taskList.removeChild(taskItem);
    } else if (event.target.classList.contains("task-circle")) {
      const taskItem = event.target.parentElement;
      taskList.removeChild(taskItem);
      const completedLi = document.createElement("li");
      completedLi.textContent = taskItem.querySelector(".task-text").textContent;
      completedTaskList.appendChild(completedLi);
    }
  });

  taskList.addEventListener("keypress", function(event) {
    if (event.target.classList.contains("task-text") && event.key === "Enter") {
      event.preventDefault();
      event.target.blur();
    }
  });
});
