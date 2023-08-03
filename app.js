const form = document.querySelector('#todo-form');
const taskInput = document.querySelector('input[name="taskname"]');
const resultSection = document.querySelector('#results');
const taskList = document.querySelector('#tasklist');


form.addEventListener('submit', addTask);

function addTask(e) {
	e.preventDefault();
	const myTasks = createTask(taskInput.value);

}


function createTask(text) {
	const newTask = document.createElement('li');
	newTask.innerText = text;
	taskList.appendChild(newTask);
	const removeButton = document.createElement("button");
	removeButton.innerText = "Remove";
	newTask.append(removeButton);
	removeButton.addEventListener("click", clearTask);
	newTask.addEventListener('click',completeTask)
	return newTask;
}

function clearTask(e) {
	e.preventDefault();
	e.target.parentElement.remove();

};
function completeTask(e){
	console.log(e.target)
	e.target.classList.add("completed");
}








