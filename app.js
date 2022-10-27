var tasks = [];

const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("todolist");

button.onclick = addTasks;

function addTasks() {
    tasks.push(input.value);
    input.value = "";
    display();
}

function display() {
    list.innerHTML = " ";
    tasks.forEach(function (item, index) {
        list.innerHTML += "<li>" + item + "<a onclick = 'edit(" + index + ")'>Edit</a>" +
            "<a onclick='deleteItem(" +
            index +
            ")'>&times | </a></li>";
    });

}
function deleteItem(index){
    tasks.splice(index, 1);
    display();

}
function edit(index){
    var update = prompt("kindly update the task here");
    tasks.splice(index,1 ,update);
    display();

}