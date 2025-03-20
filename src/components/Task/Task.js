import React, { useState } from 'react'
import PropTypes from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Task = ({ todo, deleteItem, editItem, clickHandler, startTimer, stopTimer, timers }) => {
  const { value, id, date, checked, timeLeft } = todo

  const [editing, setEditing] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  const isRunning = Boolean(timers[id])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const formattedDate =
    date && !isNaN(new Date(date).getTime())
      ? formatDistanceToNow(new Date(date), { includeSeconds: true })
      : 'just now'

  const handleSubmit = (event) => {
    event.preventDefault()
    editItem(id, inputValue)
    setEditing(false)
  }

  return (
    <li className={checked ? 'completed' : editing ? 'editing' : null}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={checked}
          onChange={(e) => clickHandler(id, e.target.checked)}
        />
        <label>
          <span className="title">{value}</span>
          <span className="description">
            <button
              className={`icon ${isRunning ? 'icon-pause' : 'icon-play'}`}
              onClick={isRunning ? () => stopTimer(id) : () => startTimer(id)}
            />
            <span className="timer">{formatTime(timeLeft)}</span>
            <span>
              <br />
              created {formattedDate} ago
            </span>
          </span>
        </label>
        <button
          type="button"
          onClick={() => {
            setEditing(!editing)
            setInputValue(value)
          }}
          className="icon icon-edit"
        />
        <button className="icon icon-destroy" onClick={() => deleteItem(id)} />
      </div>
      {editing && (
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setInputValue(e.target.value)} type="text" className="edit" value={inputValue} />
        </form>
      )}
    </li>
  )
}

Task.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  clickHandler: PropTypes.func.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  timers: PropTypes.object.isRequired,
}

export default Task
