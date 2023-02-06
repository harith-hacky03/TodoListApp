import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./input.css";





function Index() {

  const [todoList,setTodoList]= useState([]);
  const [message,setMessage]=useState("");

  const updateMessage=(event)=>{
    setMessage(event.target.value);
  };

  const updateList=()=>{

    const task={
      id:todoList.length,
      value:message,
      colour:false
    }

    setTodoList([...todoList,task]);
  }

  const deleteTask=(value)=>{

      const newTodoList=todoList.filter((task)=>{
        if(value===task.id)
        {
        return false;
        }
        else{
          return true;
        }


      })

      setTodoList(newTodoList);

  }

  const updateColour=(value)=>{

    const newTodoList=todoList.filter((task)=>{
      if(value===task.id)
      {
        task.colour=true;
      }
      return true;
    })

    setTodoList(newTodoList);
  }

  return(
    <div className="bg-gray-900 min-h-screen">
    <div>
      <h1 class="text-center text-2xl p-6 text-white">Todo List</h1>
      <div className="flex justify-center">
      <input className="border-2 border-black rounded w-[40%] h-20 drop-shadow-2xl" onChange={updateMessage}/>
      
      </div>
      <div className="flex justify-center mt-12">
      <button className="border-2 border-white px-5 py-2 rounded drop-shadow-2xl text-white mb-12" onClick={updateList}>Add Work</button>
      </div>
    </div>

    <div >
      {todoList.map((task)=>{
      return(
        <div>
      <div className="flex justify-center mt-12">
      {task.colour?<h1 className="text-white line-through">{task.value}</h1>:<h1 className="text-white">{task.value}</h1>}
      </div>

       <div className="flex justify-center mt-12"> 
        <button className="border-2 border-white px-5 py-2 rounded drop-shadow-2xl mr-10 text-white" onClick={()=>deleteTask(task.id)}>Delete Task</button>
        <button className="border-2 border-white px-5 py-2 rounded drop-shadow-2xl text-white" onClick={()=>updateColour(task.id)}>Completed</button>
        
      </div>
      </div>
      );
      })}
    </div>
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));




