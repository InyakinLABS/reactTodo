import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Task from '../Task/Task'

class TaskList extends Component {
  static defaultProps = {
    todos: {},
    deleteItem: () => {},
    editItem: () => {},
    clickHandler: () => {},
  }
  static propTypes = {
    todos: PropTypes.object.isRequired,
    deleteItem: PropTypes.func,
    editItem: PropTypes.func,
    clickHandler: PropTypes.func,
  }
  render() {
    const { todos, deleteItem, editItem, clickHandler } = this.props
    return (
      <ul className="todo-list">
        {todos.map((todo) => (
          <Task key={todo.id} todo={todo} deleteItem={deleteItem} editItem={editItem} clickHandler={clickHandler} />
        ))}
      </ul>
    )
  }
}

export default TaskList
