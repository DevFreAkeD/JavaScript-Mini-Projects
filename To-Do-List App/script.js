document.addEventListener('DOMContentLoaded', () => {

    const taskInput = document.getElementById("new-task");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskDetails = document.getElementById("task-details");
    const taskList = document.getElementById("task-list");
    const clearTasksBtn = document.getElementById("clear-tasks-btn");

    loadTasks();

    // Add event listeners and other code that interacts with the DOM
    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTaskElement);
    clearTasksBtn.addEventListener('click', clearAllTasks);

    function addTask() {
        const taskText = taskInput.value.trim();
        const detailsText = taskDetails.value.trim();
        if (taskText === '' || detailsText === '') return;

        const taskItem = createTaskElement(taskText, detailsText, 'Pending');
        taskList.appendChild(taskItem);
        saveTask(taskText, detailsText, 'Pending');
        taskInput.value = '';
        taskDetails.value = '';
    }

    function createTaskElement(taskText, detailsText, status) {
        const taskItem = document.createElement('li');
        taskItem.className = 'mt-5 bg-gray-800 flex justify-between items-center p-2 border mb-2 rounded bg-gray-100';
        taskItem.innerHTML = `
        <span class="m-5 flex-1 text-white">
            <b>Task:</b> ${taskText}
            <br>
            <b>Details:</b> ${detailsText}
            <br>
            <b>Status:</b> <span class="task-status">${status}</span>
        </span>
        <div class="flex flex-col gap-3 p-1">
            <button class="status-btn rounded-md mr-5 bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Complete</button>
            <button class="status-btn rounded-md mr-5 bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600">Pending</button>
            <button class="delete-btn rounded-md mr-5 bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Delete</button>
        </div>    
        `;
        return taskItem;
    }

    function removeTaskElement(event) {
        const taskItem = event.target.closest('li');
        const taskText = taskItem.querySelector('span').innerHTML
            .split('<br>')[0]
            .replace('<b>Task:</b> ', '')
            .trim();
        const detailsText = taskItem.querySelector('span').innerHTML
            .split('<br>')[1]
            .replace('<b>Details:</b> ', '')
            .trim();

        if (event.target.classList.contains('delete-btn')) {
            taskList.removeChild(taskItem);
            deleteTask(taskText, detailsText);
        } else if (event.target.classList.contains('status-btn')) {
            const newStatus = event.target.textContent.trim();
            const statusSpan = taskItem.querySelector('.task-status');
            statusSpan.textContent = newStatus;
            updateTaskStatus(taskText, detailsText, newStatus);
        }
    }


    function saveTask(taskText, detailsText, status) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text: taskText, details: detailsText, status: status });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function deleteTask(taskText, detailsText) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task.text !== taskText || task.details !== detailsText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function updateTaskStatus(taskText, detailsText, newStatus) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.map(task => {
            if (task.text === taskText && task.details === detailsText) {
                return { ...task, status: newStatus };
            }
            return task;
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const taskItem = createTaskElement(task.text, task.details, task.status);
            taskList.appendChild(taskItem);
        });
    }

    function clearAllTasks() {
        taskList.innerHTML = '';
        localStorage.removeItem('tasks');
    }
    
});
