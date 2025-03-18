import React, { Component } from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default class Task extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired,
    clickHandler: PropTypes.func.isRequired,
    startTimer: PropTypes.func.isRequired,
    stopTimer: PropTypes.func.isRequired,
    timers: PropTypes.object.isRequired,
  }

  formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  render() {
    const { todo, deleteItem, clickHandler, startTimer, stopTimer, timers } = this.props
    const { value, id, date, checked, timeLeft } = todo
    let isRunning = Boolean(timers[id])

    const formattedDate = date && !isNaN(new Date(date).getTime())
      ? formatDistanceToNow(new Date(date), { includeSeconds: true })
      : 'just now'

    return (
      <li className={checked ? 'completed' : null}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              clickHandler(id, e.target.checked)
              }}
          />
          <label>
            <span className="title">{value}</span>
            <span className="description">
              <button
                className={`icon ${isRunning ? 'icon-pause' : 'icon-play'}`}
                onClick={isRunning ? () => stopTimer(id) : () => startTimer(id)}
              />
              <span className="timer">{this.formatTime(timeLeft)}</span>
              <span> <br></br>created {formattedDate} ago</span>
            </span>
          </label>
          <button className="icon icon-destroy" onClick={() => deleteItem(id)} />
        </div>
      </li>
    )
  }
}