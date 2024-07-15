import TodoItem from './TodoItem'
import style from './TodoItems.module.css';

const TodoItems=({todoItems  ,onDeleteClick}) =>{
    return (
    <div className={style.ItemContainer}>
        {todoItems.map((item )=>
        <TodoItem 
        key={item.name}
        todoName={item.name} todoDate={item.duedate}
        onDeleteClick={onDeleteClick}></TodoItem>)}

  

    </div>)

}
export default TodoItems;