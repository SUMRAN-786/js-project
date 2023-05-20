//model section
let todo;

const savedTodo= JSON.parse(localStorage.getItem('todo'));

if(Array.isArray(savedTodo)){
todo = savedTodo;
}else{
    todo=[{
        title:'wash',
        dueDate: '02-10-2022',
        id: '................t01'
    },
    {
         title:'make food',
         dueDate: '07-10-2022',
         id: '02'
    },
    {
        title:'call mom',
        dueDate:  '10-10-2022',
        id: '03'
    }];
}


  
    //model (create Todo)
function createTodo(title, dueDate){
    const id = new Date().getTime();
    todo.push({
        title: title,
        dueDate: dueDate,
        id:id 
    });

    saveTodo();
}

render();


    //model (delete Todo)
function removeTodo(idToDelete){ 
 todo = todo.filter(function(todo){

    if(todo.id==idToDelete){
        return false;
    }else{
        return true;
    }

  });

  saveTodo();
}


//model (save Todo)
function saveTodo(){               
    localStorage.setItem('todo', JSON.stringify(todo));

}


//control (addTodo)
function add(){

    
    let textbox=document.getElementById('input');
    let title=textbox.value;

    const datePicker= document.getElementById('date');
    let dueDate=datePicker.value;

        createTodo(title, dueDate);
        render();
        textbox.value=" ";
        datePicker.value=" ";
    

 
}

// control (deleteTodo)
function deletetodo(event){
  const deletebtn= event.target;
  const idToDelete=deletebtn.id;

  removeTodo(idToDelete);
  render();

}

// view

function render(){

    document.getElementById('todoList').innerHTML=' ';

    todo.forEach(function(todo){
        let element = document.createElement('div');
        element.innerText=todo.title +' '+ todo.dueDate ;


        const deletebtn=document.createElement('button');
        deletebtn.innerText='delete';
        deletebtn.id="dbtn";
        deletebtn.style='margin-left: 12px;';
        deletebtn.style='background-color:rgb(236, 8, 8)';
        deletebtn.onclick= deletetodo;
        deletebtn.id = todo.id;

        element.appendChild(deletebtn);

 

        let todo_List = document.getElementById('todoList');
        todo_List.appendChild(element);

      

    });
    }


