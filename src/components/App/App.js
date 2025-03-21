import React, { useState, useEffect } from 'react'

import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'
import Footer from '../footer/footer'
import '../../css/app.css'

const App = () => {
  const [todoData, setTodoData] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [filter, setFilter] = useState('All')
  const [timers, setTimers] = useState({})

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoData))
  }, [todoData])

  const clickHandler = (id, status) => {
    setTodoData((prevTodoData) => prevTodoData.map((item) => (item.id === id ? { ...item, checked: status } : item)))
  }

  const deleteItem = (id) => {
    setTodoData((prevTodoData) => prevTodoData.filter((item) => item.id !== id))
    stopTimer(id)
  }

  const addItem = (text, time = 0) => {
    const newItem = {
      value: text,
      id: Date.now(),
      checked: false,
      date: new Date(),
      timeLeft: time,
    }
    setTodoData((prevTodoData) => [...prevTodoData, newItem])
    startTimer(newItem.id)
  }

  const startTimer = (id) => {
    setTimers((prevTimers) => ({
      ...prevTimers,
      [id]: setInterval(() => updateTimer(id), 1000),
    }))
  }

  const stopTimer = (id) => {
    setTimers((prevTimers) => {
      clearInterval(prevTimers[id])
      const updatedTimers = { ...prevTimers }
      delete updatedTimers[id]
      return updatedTimers
    })
  }

  const updateTimer = (id) => {
    setTodoData((prevTodoData) =>
      prevTodoData.map((item) =>
        item.id === id && !item.checked ? { ...item, timeLeft: Math.max(0, item.timeLeft - 1) } : item
      )
    )
  }

  const filterItems = () => {
    return todoData.filter(({ checked }) => {
      if (filter === 'All') return true
      if (filter === 'Completed') return checked
      return !checked
    })
  }

  const newFilter = (filter) => {
    setFilter(filter)
  }

  const clearCompleted = () => {
    setTodoData((prevTodoData) => prevTodoData.filter((item) => !item.checked))
  }

  const editItem = (id, text) => {
    setTodoData((prevTodoData) => prevTodoData.map((item) => (item.id === id ? { ...item, value: text } : item)))
  }

  const filteredTodos = filterItems()

  return (
    <div className="todoapp">
      <NewTaskForm addItem={addItem} />
      <section className="main">
        <TaskList
          todos={filteredTodos}
          deleteItem={deleteItem}
          editItem={editItem}
          clickHandler={clickHandler}
          timers={timers}
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
      </section>
      <Footer
        itemsLeft={todoData.filter((item) => !item.checked).length}
        newFilter={newFilter}
        clearCompleted={clearCompleted}
      />
    </div>
  )
}

export default App
