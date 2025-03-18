import React, { Component } from 'react'

import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'
import Footer from '../footer/footer'
import '../../css/app.css'

class App extends Component {
  state = {
    todoData: JSON.parse(localStorage.getItem('todos')) || [],
    filter: 'All',
    timers: {},
  }

  componentDidUpdate(prevState) {
    if (prevState.todoData !== this.state.todoData) {
      localStorage.setItem('todos', JSON.stringify(this.state.todoData))
    }
  }

  clickHandler = (id, status) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((item) => (item.id === id ? { ...item, checked: status } : item)),
    }))
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((item) => item.id !== id),
    }))
  }

  addItem = (text, time = 0) => {
    const newItem = {
      value: text,
      id: this.state.todoData.length,
      checked: false,
      date: new Date(),
      timeLeft: time,
    }
    this.setState(({ todoData }) => ({
      todoData: [...todoData, newItem],
    }))
    this.startTimer(newItem.id)
  }

  startTimer = (id) => {
    this.setState(({ timers }) => ({
      timers: {
        ...timers,
        [id]: setInterval(() => this.updateTimer(id), 1000),
      },
    }))
  }

  stopTimer = (id) => {
    this.setState(({ timers }) => {
      clearInterval(timers[id])
      const updatedTimers = { ...timers }
      delete updatedTimers[id]
      return { timers: updatedTimers }
    })
  }

  updateTimer = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((item) =>
        item.id === id && !item.checked ? { ...item, timeLeft: Math.max(0, item.timeLeft - 1) } : item
      ),
    }))
  }

  filterItems = () => {
    const { todoData, filter } = this.state
    return todoData.filter(({ checked }) => {
      if (filter === 'All') return true
      if (filter === 'Completed') return checked
      return !checked
    })
  }

  newFilter = (filter) => {
    this.setState({ filter })
  }

  clearCompleted = () => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((item) => !item.checked),
    }))
  }

  editItem = (id, text) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((item) => (item.id === id ? { ...item, value: text } : item)),
    }))
  }

  render() {
    const { todoData, timers } = this.state
    const filteredTodos = this.filterItems()

    return (
      <div className="todoapp">
        <NewTaskForm addItem={this.addItem} />
        <section className="main">
          <TaskList
            todos={filteredTodos}
            deleteItem={this.deleteItem}
            editItem={this.editItem}
            clickHandler={this.clickHandler}
            timers={timers}
            startTimer={this.startTimer}
            stopTimer={this.stopTimer}
          />
        </section>
        <Footer
          itemsLeft={todoData.filter((item) => !item.checked).length}
          newFilter={this.newFilter}
          clearCompleted={this.clearCompleted}
        />
      </div>
    )
  }
}

export default App
