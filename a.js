function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        var listItem = document.createElement('li');
        listItem.textContent = taskInput.value;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';
        deleteButton.className = 'delete-btn';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
}
