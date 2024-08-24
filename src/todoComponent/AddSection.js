import { useRef} from "react"
import { MdLibraryAdd } from "react-icons/md";

import { useContext } from "react"
import TodoItemsContext from "../store/Todo-item-store"

function AddSection() {

  const {addNewItem} = useContext(TodoItemsContext)
  // const addNewItem = contextObj.addNewItem;

  //By using useStat() when ever an update is done page is re-render
  // const [todoName,setTodoName]= useState()
  // const [dueDate,setDueDate]= useState()

  // For avoiding of Re-rendering of component we use usRef() Hook.
  // Also useRef() is used to avoid to make onChange handler for each input field
  const todoNameElement = useRef('')
  const dueDateElement = useRef('')

  const handleAddButtonClick = (e)=>{
    e.preventDefault()
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName,dueDate)

   
  }


  return (

    <div className=" todo-container">
      <form className="row my_row"
      onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input type="text" placeholder="enter todo here" 
          ref={todoNameElement}></input>
        </div>
        <div className="col-4">
          <input type="date"
          ref={dueDateElement}></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success my-Btn">
          <MdLibraryAdd />

           </button>

        </div>
      </form>
    </div>
  )
}

export default AddSection