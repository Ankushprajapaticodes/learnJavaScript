
let toDoList = [
  {
    item : 'first task',
    dueDate : '26-Jun-2025',
  },
  {
    item : 'second task',
    dueDate : '27-Jun-2025',
  }
];
displayItems();

function addTodo(){

  let inputElement = document.querySelector('#text-input');
  let dateElement = document.querySelector('#text-date');
  let toDoItem = inputElement.value;
  let toDoDate = dateElement.value;
  toDoList.push({item : toDoItem, dueDate : toDoDate});
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.container-items');

  let newHtml = '';

  for(let i = 0; i < toDoList.length; i++){

    let toDoItem = toDoList[i].item;
    let toDodueDate = toDoList[i].dueDate;
    newHtml += `
        
        <span>${toDoItem}</span>
        <span>${toDodueDate}</span>
        <button onclick = "toDoList.splice(${i},1); 
        displayItems();" class="btn-delete" >Delete</button>
        
    `;
  }
  containerElement.innerHTML = newHtml;
}