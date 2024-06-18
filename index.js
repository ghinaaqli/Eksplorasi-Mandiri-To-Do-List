document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const urlInput = document.getElementById('url-input');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', function() {
        const task = todoInput.value.trim();
        const url = urlInput.value.trim();
        if (task) {
            addTask(task, url);
            todoInput.value = '';
            urlInput.value = '';
            todoInput.focus();
        }
    });

    todoList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const li = event.target.parentElement;
            li.remove();
        } else if (event.target.tagName === 'LI' || event.target.tagName === 'A') {
            event.target.classList.toggle('done');
        }
    });

    function addTask(task, url) {
        const li = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task;

        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.textContent = ' (Open)';
            li.appendChild(taskText);
            li.appendChild(link);
        } else {
            li.textContent = task;
        }

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        li.appendChild(delBtn);
        todoList.appendChild(li);
    }
});