import React from 'react'
import PropTypes from 'prop-types'

const Filters = ({ newFilter }) => {
  return (
    <ul className="filters">
      <li key="1">
        <button onClick={() => newFilter('All')}>All</button>
      </li>
      <li key="2">
        <button onClick={() => newFilter('Active')}>Active</button>
      </li>
      <li key="3">
        <button onClick={() => newFilter('Completed')}>Completed</button>
      </li>
    </ul>
  )
}

Filters.defaultProps = {
  newFilter: () => {},
}

Filters.propTypes = {
  newFilter: PropTypes.func,
}

export default Filters
