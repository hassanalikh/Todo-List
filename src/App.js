import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import AddSection from './todoComponent/AddSection';
import { useState } from 'react';
import TodoItems from './todoComponent/TodoItems';
import WellcomeMsg from './todoComponent/WellcomeMsg';
import TodoItemsContext from './store/Todo-item-store';




function App() {

  const [todoItems, setTodoItems] = useState([])

  //Add button handler
  // Below approch to set ietems is not capable in a heavy project there can be some errors 
  // const handleNewItem = (itemName,itemDueDate)=>{
  //   const newTodoItems = [...todoItems , 
  //     {todoName: itemName,todoDate: itemDueDate}];
  //     setTodoItems(newTodoItems);
  // }

  //Add button handler
  // For avoiding the eroors in a heavy project we can pass a arrow function in setItems
  // Which is the Best approch 
  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems,
    { todoName: itemName, todoDate: itemDueDate }];
    setTodoItems((currentValue) =>
      [...currentValue,
      { todoName: itemName, todoDate: itemDueDate }
      ]);

  }

  //delete Button handler
  const deleteItem = (todoItemName) => {
    // console.log(`ITEM DELETED ${todoItemName}`)
    const newTodoItems = todoItems.filter(item => item.todoName !== todoItemName)
    setTodoItems(newTodoItems);
  }



  return (
    <TodoItemsContext.Provider value={
      {
        todoItems : todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem

      }
    }>
      <h1>Todo App</h1>
      <center className='todo-container'>
        <AddSection />
        <WellcomeMsg  />
        <TodoItems />
      </center>


    </TodoItemsContext.Provider>
  );
}

export default App;
