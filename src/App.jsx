import { useState } from 'react'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import WelcomeMessage from './components/WelcomeMessage'



function App() {

 
  const [todoItems, setTodoItems]= useState([]);
  
  const handleNewItem=(itemName,itemDueDate)=>{

    const newTodoItems=[...todoItems,{
      name: itemName, duedate : itemDueDate},]
      setTodoItems(newTodoItems);

  }

  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems= todoItems.filter(item=>item.name !==todoItemName)
    setTodoItems(newTodoItems)


  }

  return (
  <center className="todo-container">
    <AppName />
    <AddTodo onNewItem={handleNewItem} ></AddTodo>
    {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
    
    <TodoItems todoItems={todoItems}
    onDeleteClick={handleDeleteItem}></TodoItems>
    
    
    
  
  </center>)
}

export default App
