document.addEventListener('DOMContentLoaded', () => {
  
    const taskInput = document.getElementById("new-task");
    const addTaskBtn = document.getElementById("add-task-btn");
    const TaskDetails = document.getElementById("task-details");
    const taskList = document.getElementById("task-list");

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        const detailsText = TaskDetails.value.trim();
        if(taskText === '' || detailsText === '')
            return;

        const taskItem = createTaskElement(taskText, detailsText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    function createTaskElement(taskText, detailsText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'mt-5 bg-gray-800 flex justify-between items-center p-2 border mb-2 rounded bg-gray-100';
        taskItem.innerHTML = `
            <span class="m-5 flex-1 text-white">
                <b>Task:</b> ${taskText}
                <br>
                <b>Details:</b> ${detailsText}
            </span>
            <button class="rounded-md mr-5 bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Delete</button>
        `;
        return taskItem;
    }
  
})
