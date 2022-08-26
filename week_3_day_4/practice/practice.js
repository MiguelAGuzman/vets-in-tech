/*
TO DO APP

1. EASY: First write out the function that will add on to the existing list from the users input.
2. MEDIUM: Create a button at the bottom of the list to clear out the whole list.
3. HARD: With each item that is added, also add a delete button with the ability to delete just that item. NOTE: you may need to look up how to access the li that the button is attached to and how to remove it.
4. NIGHTMARE: Can you figure out a way to edit the task? NOTE: need to add an edit button
*/
var task = document.getElementById('displayName');

function addTask() {
    var taskInput = task.value;
    var newTask = document.createElement('li');
newTask = taskInput;

var deleteButton = document.createElement('button');
deleteButton.setAttribute("class", "btn");
deleteButton.appendChild(document.createTextNode('Delete'));

var dateCol = document.getElementById('dateCol');
dateCol.appendChild(newTask);
// ul>li.appendChild(deleteButton).addEventListener('click', remove
}

function removeTasks() {
    var dateCol = document.getElementById("dateCol");
    dateCol.innerHTML = "";
}

// function removeSingle() {
//     var dateCol = document.getElementById("dateCol");
//     dateCol.removeChild(dateCol.childNodes[0]);
// }