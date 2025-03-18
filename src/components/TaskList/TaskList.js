// TaskList.js (добавляем пропс updateTime)
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Task from '../Task/Task'

class TaskList extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    clickHandler: PropTypes.func.isRequired,
    updateTime: PropTypes.func.isRequired,
  }

  render() {
    const { todos, deleteItem, editItem, clickHandler, updateTimer,timers ,startTimer,stopTimer} = this.props
    return (
      <ul className="todo-list">
        {todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            deleteItem={deleteItem}
            editItem={editItem}
            clickHandler={clickHandler}
            updateTimer={updateTimer}
            timers={timers}
            startTimer={startTimer}
            stopTimer={stopTimer}
          />
        ))}
      </ul>
    )
  }
}

export default TaskList