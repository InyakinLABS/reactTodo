import PropTypes from 'prop-types'
import React, { useState } from 'react'

const NewTaskForm = (props) => {
  const [value, setValue] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  const isTimeValid = () => {
    const total = parseInt(minutes || 0) * 60 + parseInt(seconds || 0)
    return total > 0
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const timeInSeconds = parseInt(minutes || 0) * 60 + parseInt(seconds || 0)

    if (value.trim()) {
      props.addItem(value, timeInSeconds) // Передаем текст задачи и время
      setValue('')
      setMinutes('')
      setSeconds('') // Очищаем поля формы
    }
  }

  return (
    <header className="header">
      <h1>TODO</h1>
      <form className="new-todo-form" onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          type="number"
          min="0"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          type="number"
          min="0"
          max="59"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
        <button
          type="submit"
          className={`submit-btn ${!isTimeValid() ? 'disabled' : ''}`}
          disabled={!value.trim() || !isTimeValid()}
          aria-label="Add task"
        />
      </form>
    </header>
  )
}
export default NewTaskForm

NewTaskForm.propTypes = {
  addItem: PropTypes.func.isRequired,
}
