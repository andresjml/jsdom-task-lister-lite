document.addEventListener("DOMContentLoaded", () => {
  // your code here
let taskFormSubmit = document.getElementById('submit');
let ul = document.getElementById('tasks');
    taskFormSubmit.addEventListener('click', function(e){
    e.preventDefault();    
    let li = document.createElement('li');
    li.innerHTML =document.getElementById('new-task-description').value;  
    let button = document.createElement('button');  
    button.innerHTML='X'
    button.id = document.getElementById('new-task-description').value;
    li.appendChild(button)
    ul.appendChild(li);  
    button.addEventListener('click', function(){  
      ul.removeChild(li);
    });
  });
});
