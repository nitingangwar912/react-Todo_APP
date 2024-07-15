import { useState } from "react";

function AddTodo({onNewItem}){

  const [todoName,setTodoName]= useState("")
  const [dueDate,setDueDate]= useState("")


  const handleNameChange=(event)=>{
    setTodoName(event.target.value);

  }
  const handleDateChange=(event)=>{
    setDueDate(event.target.value);
  }

  const handleAddButtonClicked=()=>{
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");

  };

    return(
        <div className="row Ng-Row">
          <div className="col-6">
            <input type="text" placeholder='Enter ToDo here'
            value={todoName}
            onChange={handleNameChange} />
          </div>
          <div className="col-4">
            <input type='date'
            value={dueDate}
            onChange={handleDateChange}></input>
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-success Ng-Button"
            onClick={handleAddButtonClicked}>Add</button>
          </div>
        </div>

     
    )
}
export default AddTodo;