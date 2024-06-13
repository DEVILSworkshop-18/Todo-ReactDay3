import React, { useState } from "react";
import Input from "./Components/Input";
import Cards from "./Components/Cards";
import Edit from "./Components/Edit";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodoIndex, setUpdatedTodoIndex] = useState("");
  const [status,setStatus]=useState('notcompleted')
  const [filter,setFilter]=useState('All')

  const filterTodo=()=>{
    if(filter==='completedList'){
      return todo.filter((item)=>item.completed==='completed')
    }
    else if(filter==='notCompletedList'){
      return todo.filter((item)=>item.completed==='notCompleted')
    }
    else{
      return todo
    }
  };

  const todos = filterTodo();
  const addTodo = (newTitle, newDesc , status) => {
    const data = {
      id: todo.length + 1,
      title: newTitle,
      desc: newDesc,
      completed: status,
    };

    setTodo((preTodos) => {
      let updatedtodos = [...todo, data];
      return updatedtodos;
    });
  };


  const handleDelete = (id) => {
    setTodo(todo.filter((ele) => ele.id !== id));
  };


  const handleEdit = (item) => {
    setIsEditing(true);
    setTitle(item.title);
    setDesc(item.desc);
    setUpdatedTodoIndex(item.id);
  };


  const updateTodo = () => {
    let updatedTodoTitle = title;
    let updatedToDoDecs = desc;
    let updatedtodo = todo.map((ele) => {
      if (ele.id === updatedTodoIndex) {
        ele.title = updatedTodoTitle;
        ele.desc = updatedToDoDecs;
      }
      return ele;
    });
    setTodo([...updatedtodo]);
  };


  const handleEditedValue = () => {
    if ((title, desc === "")) {
      alert("Enter Title and Description");
    } else {
      updateTodo(title, desc);
    }
    setIsEditing(false);
    setTitle("");
    setDesc("");
  };

  return (
    <>
      <div className="text-center p-4">
      <h1 className="checkerTodo">Todo Checker</h1>
      </div>
      {!isEditing && (
        <Input
          addTodo={addTodo}
          title={title}
          setTitle={setTitle}
          desc={desc}
          setDesc={setDesc}
          setStatus={setStatus}
          status={status}
        />
      )}
      {isEditing && (
        <Edit
          title={title}
          setTitle={setTitle}
          desc={desc}
          setDesc={setDesc}
          handleEditedValue={handleEditedValue}
        />
      )}

      <div className="d-flex flex-wrap  justify-content-between  ms-3  ms-md-5 me-md-5">
        <div className="text-center">
          <h1>My ToDos</h1>
        </div>
        <div>
          <h3>Fliter <select className="ms-sm-2 rounded-2" value={filter} onChange={(e)=>setFilter(e.target.value)}>
            <option value='All'>All</option>
            <option value="completedList">
              Complete
            </option>
            <option value="notCompletedList">
              Not Complete
            </option>
          </select></h3>
        </div>
      </div>
      <hr/>
          <Cards
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            setTodo={setTodo}
            todos={todos}
          />
    </>
  );
};

export default App;
