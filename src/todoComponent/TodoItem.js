import { MdDeleteOutline } from "react-icons/md";

import { useContext } from "react"
import TodoItemsContext from "../store/Todo-item-store"

function TodoItem({ todoName, todoDate}) {
    const {deleteItem} = useContext(TodoItemsContext)
    // const deleteItem = contextobj.deleteItem;
    // console.log("todoName" , todoName)
    // console.log("todoDate" , todoDate)
    return (
        <div className="todo-container">
            <div className="row my_row">
                <div className="col-6">{todoName}</div>
                <div className="col-4">{todoDate}</div>
                <div className="col-2">
                    <button className="btn btn-danger my-Btn"
                        onClick={() => deleteItem(todoName)}>
                        <MdDeleteOutline />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem