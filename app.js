const form = document.querySelector('#todo-form');
const taskInput = document.querySelector('input[name="taskname"]');

const resultSection = document.querySelector('#results');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const myTasks = createTask(taskInput.value);
	resultSection.appendChild(myTasks);

});

function createTask(text) {
	const newTask = document.createElement('h2');
	newTask.innerText = text;
	const removeButton = document.createElement("button");
	removeButton.innerText = "Remove";
	
	const completedButton = document.createElement("button");
	completedButton.innerText = "Mark Completed";

	newTask.append(removeButton)
	newTask.append(completedButton)

	return newTask;
}


//possibly add li for each task
//append remove and completed buttons to li
//click handler to remove element
//click handler to strike through completed tasks

//save task list to local storage


// const form = document.querySelector("form");
// const friendList = document.querySelector("#friend-list");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const newFriendInput = document.querySelector("#first-name");
//   const newLi = document.createElement("li");
//   const newButton = document.createElement("button");
//   newLi.innerText = newFriendInput.value;
//   newButton.innerText = "Remove";

  removeButton.addEventListener("submit", function(event) {
    event.target.remove();
  });

//   newLi.append(newButton);
//   friendList.append(newLi);
//   form.reset();
// });







