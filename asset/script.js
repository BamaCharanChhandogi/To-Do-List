let button = document.getElementById("btn");
let input = document.getElementById("input");
let task = document.getElementById("task");
button.addEventListener('click', function () {
    if (input.value.length == 0) {
        alert('kindly Add a task!');
    }
    else {
        task.innerHTML += `
        <div class="task">
        <span id="taskname">
            ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">
        Remove
        </button>
    </div>
        `;
        // button
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
});