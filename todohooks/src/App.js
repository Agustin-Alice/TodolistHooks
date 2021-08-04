import React, { useState } from 'react';
import './App.css';
import TodoItemsCreators from './components/TodoItemsCreators';
import TodoItems from './components/TodoItems'


const App = () =>  {
  const [todos, setTodos] = useState({})
  const carry = (item) => {
    setTodos(prevState => ({...prevState, [item.id]: item}))
  }

  const edit = (newTodo, id) => {
    let fix = {name: newTodo, id: id}
    setTodos(prevState => ({...prevState, [id]: fix }))
  }

  return (
    <div className="App">
      <section className="App-right">
        <TodoItemsCreators
        onCreate= {carry}
        /> 
      </section>
      <section className="App-left">
        {Object.keys(todos).length !== 0 &&
        <TodoItems
        todos={todos} 
        handleTodo = {edit}
        />} 
      </section>
    </div>
  )
  
}

export default App;