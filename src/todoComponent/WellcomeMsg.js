import { useContext } from "react"
import TodoItemsContext from "../store/Todo-item-store"

import styles from './WellcomeMsg.module.css'

function WellcomeMsg() {
  const obj = useContext(TodoItemsContext)
  const todoItems = obj.todoItems;
  return (
    <>
    {todoItems.length === 0 &&  <h3 className={styles.WellcomMsg}>Enjoy Your Day</h3>}
  
    </>)
}

export default WellcomeMsg