function TodoItem({todoName, todoDate, onDeleteClick}){
  return(
      <div className="row Ng-Row">
      <div className="col-6">{todoName}</div>
      <div className="col-4"> {todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger Ng-Button"
        onClick={()=>onDeleteClick(todoName)}>Delete</button>
        </div>
      </div>
  )
}

export default TodoItem;