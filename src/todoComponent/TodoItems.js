import TodoItem from "./TodoItem"

import { useContext } from "react"
import TodoItemsContext from "../store/Todo-item-store"

function TodoItems() {
   const {todoItems}= useContext(TodoItemsContext)
  // const todoItems = contextobj.todoItems;
  // const deleteItem = contextobj.deleteItem;
  return (
    <div className='items-container'>
    {todoItems.map((item,index) => <TodoItem key={index} todoName={item.todoName} todoDate={item.todoDate} />)}
   
  </div>
  )
}

export default TodoItems