// section for selecting  elements on the form
const form = document.querySelector('#todo-form');
const taskInput = document.querySelector('input[name="taskname"]');
const resultSection = document.querySelector('#results');
const taskList = document.querySelector('#tasklist');
const savedTasks = [];

// task input form
form.addEventListener('submit', addTask);

//event heandler to create tasks
function addTask(e) {
	e.preventDefault();
	const myTasks = createTask(taskInput.value);
	form.reset();

}

//adds a new task to the list
function createTask(text) {
	const newTask = document.createElement('li');
	newTask.innerText = text;
	taskList.appendChild(newTask);
	//adds task list to local storage
	savedTasks.push({ task: newTask.innerText});
  localStorage.setItem("todos", JSON.stringify(savedTasks));

	//create button to remove each task
	const removeButton = document.createElement("button");//adds a remove button to each task
	removeButton.innerText = "Remove";
	newTask.append(removeButton);
	removeButton.addEventListener("click", clearTask);
	//event handler for completed tasks
	newTask.addEventListener('click', completeTask);

	return newTask;
}

function clearTask(e) {
	e.preventDefault();
	e.target.parentElement.remove();

};
//toggles class to completed when a task is selected
//CSS decorator implemented to strike through the task
function completeTask(e) {
	console.log(e.target);
	e.target.classList.add("completed");
}


//retieves tasks from local memory
const savedTodos = JSON.parse(localStorage.getItem("todos"))



