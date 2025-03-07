import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Filters extends Component {
  static defaultProps = {
    newFilter: '',
  }
  static propTypes = {
    newFilter: PropTypes.string,
  }
  render() {
    const { newFilter } = this.props

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
}
