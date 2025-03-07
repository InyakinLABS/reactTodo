import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Filters from '../TasksFilter/TasksFilter'

export default class Footer extends Component {
  static defaultProps = {
    itemsLeft: 0,
    newFilter: '',
    clearCompleted: () => {},
  }
  static propTypes = {
    itemsLeft: PropTypes.number,
    newFilter: PropTypes.string,
    clearCompleted: PropTypes.func,
  }

  render() {
    const { itemsLeft, newFilter, clearCompleted } = this.props
    return (
      <footer className="footer">
        <span className="todo-count">{itemsLeft} items left</span>
        <Filters newFilter={newFilter} />
        <button className="clear-completed" onClick={() => clearCompleted()}>
          Clear completed
        </button>
      </footer>
    )
  }
}
