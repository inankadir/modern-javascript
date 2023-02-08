// Add butonuna tıklanıp tıklanmadığını dinle
// tıklandığında, inputun içeriğini al
// git yeni ibir tane item elementi oluştur
// ve git bunu DOM un içerisine koy

const addTaskButton = document.querySelector(".addTask");
const todoInput = document.querySelector(".todoInput");
const todosContainer = document.querySelector('.todos');

const toggleComplete = (event) => {
    const { parentElement } = event.currentTarget;

    const isCompleted = [...parentElement.classList].some((className) => className === "completed");
    if (!isCompleted) {
        event.currentTarget.innerText = 'Todo';
    } else {
        event.currentTarget.innerText = 'Complete';
    }

    event.currentTarget.innerText = 'Todo'
    event.currentTarget.parentElement.classList.toggle('completed')
}
const removeItem = (event) => {
    todosContainer.removeChild(event.currentTarget.parentElement);
}

const renderTodoItem = (todoText) => {
    const todoItemElement = document.createElement('li');
    todoItemElement.classList.add('todoItem');

    const completeButtton = document.createElement('button')
    completeButtton.classList.add('completeButton');
    completeButtton.innerText = 'Complete';
    completeButtton.addEventListener('click', toggleComplete)
    todoItemElement.appendChild(completeButtton);
   
    const deleteButtton = document.createElement('button')
    deleteButtton.classList.add('deleteButton');
    deleteButtton.innerText = 'Delete';
    deleteButtton.addEventListener('click', removeItem)
    todoItemElement.appendChild(deleteButtton);
    
    const textElement = document.createElement('p');
    textElement.innerText = todoText;
    textElement.classList.add('todoText');
    todoItemElement.appendChild(textElement);

    todosContainer.appendChild(todoItemElement);
    todoInput.value = '';
    todoInput.focus();
}

const addTask = () => {
    if (todoInput.value === "") {

        alert('Input bos olamaz');
    } else {
        renderTodoItem(todoInput.value)
    }
};

addTaskButton.addEventListener('click', addTask);