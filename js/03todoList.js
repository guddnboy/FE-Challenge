var content = document.querySelector('#inputContent').value;
var todolist = document.querySelector('#todolist');
var add = document.querySelector('#add');

function adding(){
    todolist.innerText += content;
}