import React from 'react'
import PropTypes from 'prop-types'

import Task from '../Task/Task'

const TaskList = (props) => {
  const { todos, deleteItem, editItem, clickHandler, updateTimer, timers, startTimer, stopTimer } = props
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

TaskList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  clickHandler: PropTypes.func.isRequired,
  updateTimer: PropTypes.func.isRequired,
  timers: PropTypes.object.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
}

export default TaskList
