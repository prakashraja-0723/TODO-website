const black_screen = document.getElementById("black-screen");
const title = document.getElementById("title");
const description = document.getElementById("description");
const todo_list = document.getElementById("todo-list");

// open Model
const handleOpenModel = () => {
  black_screen.classList.toggle("hidden");
};

// close Model
const handleCloseModel = () => {
  black_screen.classList.toggle("hidden");
};

// add Todo list
document.querySelector(".add-btn").addEventListener("click", (e) => {
  e.preventDefault();
});

const  TODO_DATA = [];
const handleAddTodo = () => {
  let TODO_DESCRIPTION = description.value;
  let TODO_TITLE = title.value;

  if (TODO_TITLE !== "" && TODO_TITLE.length >= 3) {
    title.value = "";
  } else {
    console.log("HI");
  }
  if (TODO_DESCRIPTION !== "" && TODO_DESCRIPTION.length >= 15) {
    description.value = "";
  } else {
    console.log("ME");
  }
  if (
    TODO_TITLE !== "" &&
    TODO_TITLE.length >= 3 &&
    TODO_DESCRIPTION !== "" &&
    TODO_DESCRIPTION.length >= 15
  ) {
    TODO_DATA.push({ title: TODO_TITLE, description: TODO_DESCRIPTION });
    handleCloseModel();
    console.log(TODO_DATA)
    const TODO_LIST = document.createElement("div");
    const TODO_LIST_TITLE = document.createElement("h1");
    const TODO_LIST_DESCRIPTION = document.createElement("p");
    const TODO_LIST_CHECK =  document.createElement('i');
    const TODO_LIST_DELETE_BTN =  document.createElement('button');
    const TODO_LIST_ERASER = document.createElement("i")
    
    TODO_LIST_TITLE.innerHTML = TODO_TITLE;
    TODO_LIST_DESCRIPTION.innerHTML = TODO_DESCRIPTION;
    TODO_LIST.classList.add("card");
    TODO_LIST_CHECK.style.cursor = 'pointer';
    TODO_LIST_CHECK.classList.add('fa-solid');
    TODO_LIST_CHECK.classList.toggle('fa-clipboard-list');
    
    TODO_LIST_ERASER.classList.add('fa-solid');
    TODO_LIST_DELETE_BTN.classList.add('delete-task');
    TODO_LIST_DELETE_BTN.classList.toggle('hidden');
    TODO_LIST_DELETE_BTN.innerHTML = 'Erase&nbsp;&nbsp;'
    TODO_LIST_ERASER.classList.add('fa-eraser');
    
    // AppendChild
    todo_list.appendChild(TODO_LIST);
    TODO_LIST.appendChild(TODO_LIST_TITLE);
    TODO_LIST.appendChild(TODO_LIST_DESCRIPTION);
    TODO_LIST_TITLE.appendChild(TODO_LIST_CHECK);
    TODO_LIST_DELETE_BTN.appendChild(TODO_LIST_ERASER)
    TODO_LIST.appendChild(TODO_LIST_DELETE_BTN);
    
  // EventListener
    TODO_LIST_CHECK.addEventListener('click', ()=>{
      TODO_LIST_CHECK.classList.toggle('fa-clipboard-list');
      TODO_LIST_CHECK.classList.toggle('fa-clipboard-check');
      TODO_LIST.classList.toggle('task-completed')
    TODO_LIST_DELETE_BTN.classList.toggle('hidden');
    })
    
    TODO_LIST_DELETE_BTN.addEventListener('click', ()=>{
    TODO_LIST.classList.toggle('hidden');
    
    })
  }

  
};
