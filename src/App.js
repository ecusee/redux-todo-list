import React from 'react'
import AddToDo from './components/AddToDo'
import TodoItem from './components/TodoItem'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <AddToDo />
      <TodoItem />
    </div>
  )
}

export default App
