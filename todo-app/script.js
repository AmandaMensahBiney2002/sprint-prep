let tasks = [];


const taskInput = document.getElementById("taskInput");

const addButton = document.getElementById("addButton");

const taskList = document.getElementById("taskList");

const taskCount = document.getElementById("taskCount");



function renderTasks() {

    taskList.innerHTML = "";


    tasks.forEach(function(task, index) {


        const li = document.createElement("li");


        li.textContent = task.name;



        if (task.completed) {

            li.classList.add("completed");

        }



        li.addEventListener("click", function() {

            task.completed = !task.completed;

            renderTasks();

        });



        const deleteButton = document.createElement("button");


        deleteButton.textContent = "Delete";


        deleteButton.addEventListener("click", function(event) {

            event.stopPropagation();

            tasks.splice(index, 1);

            renderTasks();

        });



        li.appendChild(deleteButton);

        taskList.appendChild(li);


    });


    updateCount();

}



function addTask() {


    const text = taskInput.value.trim();



    if (text === "") {

        return;

    }



    tasks.push({

        name: text,

        completed: false

    });



    taskInput.value = "";


    renderTasks();

}




function updateCount() {


    const remaining = tasks.filter(function(task) {

        return !task.completed;

    }).length;


    taskCount.textContent = remaining;

}



addButton.addEventListener("click", addTask);



renderTasks();