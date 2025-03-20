import PropTypes from 'prop-types'
import React, { useState } from 'react'

const NewTaskForm = (props) => {
  const [value, setValue] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

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
    <form className="header" onSubmit={handleSubmit}>
      <h1>TODO</h1>
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
      <button type="submit" style={{ display: 'none' }} /> {/* Скрытая кнопка для отправки формы */}
    </form>
  )
}
export default NewTaskForm

NewTaskForm.propTypes = {
  addItem: PropTypes.func.isRequired,
}
