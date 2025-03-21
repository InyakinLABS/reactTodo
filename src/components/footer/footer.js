import React from 'react'
import PropTypes from 'prop-types'

import Filters from '../TasksFilter/TasksFilter'

const Footer = (props) => {
  const { itemsLeft, newFilter, clearCompleted } = props
  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeft} items left</span>
      <Filters newFilter={newFilter} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  itemsLeft: 0,
  newFilter: '',
  clearCompleted: () => {},
}

Footer.propTypes = {
  itemsLeft: PropTypes.number,
  newFilter: PropTypes.string,
  clearCompleted: PropTypes.func,
}

export default Footer
