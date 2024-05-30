# To Do List App
This is a simple task manager application built with HTML, TailwindCSS, and JavaScript. It allows users to add tasks with details, mark tasks as complete or pending, and delete tasks. The tasks are saved in the browser's local storage, so they persist even after the browser is closed.

## Getting Started
To use the application, simply open the index.html file in your web browser. The application provides a form where you can enter a task description and details, and then add it to the list. You can mark tasks as complete or pending by clicking the corresponding buttons, and you can delete tasks by clicking the delete button.

##Code Structure
The JavaScript code `script.js` is structured as follows:

**1. Event Listeners Setup:** The DOMContentLoaded event is used to ensure that the DOM is fully loaded before executing JavaScript code. Event listeners are added to the buttons for adding tasks, marking tasks as complete or pending, and clearing all tasks.

**2. Function Definitions:**

- `addTask()`: This function is called when the user clicks the "Add Task" button. It retrieves the task description and details from the input fields, creates a new task element, appends it to the task list, saves the task to local storage, and clears the input fields.

- `createTaskElement(taskText, detailsText, status)`: This function dynamically creates a new task element with the provided task description, details, and status. It returns the created element.

- `removeTaskElement(event)`: This function is called when the user clicks on the task list. It determines whether the user clicked on a delete button or a status button, and performs the corresponding action (deleting the task or updating its status).

- `saveTask(taskText, detailsText, status)`: This function saves a new task to local storage. It retrieves the existing tasks from local storage, adds the new task to the array, and saves the updated array back to local storage.

- `deleteTask(taskText, detailsText)`: This function deletes a task from local storage. It retrieves the existing tasks from local storage, filters out the task to be deleted, and saves the updated array back to local storage.

- `updateTaskStatus(taskText, detailsText, newStatus)`: This function updates the status of a task in local storage. It retrieves the existing tasks from local storage, finds the task to be updated, updates its status, and saves the updated array back to local storage.

- `loadTasks()`: This function loads tasks from local storage when the page is loaded. It retrieves the tasks from local storage and dynamically creates task elements for each task.

- `clearAllTasks()`: This function clears all tasks from the task list and local storage.

## Dependencies
The application has no external dependencies and can be run directly in any modern web browser.
