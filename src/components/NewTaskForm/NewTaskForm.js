import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class NewTaskForm extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      minutes: '',
      seconds: '',
    }
  }

  static propTypes = {
    addItem: PropTypes.func.isRequired,
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { value, minutes, seconds } = this.state

    // Преобразуем минуты и секунды в число
    const timeInSeconds = parseInt(minutes || 0) * 60 + parseInt(seconds || 0)

    if (value.trim()) {
      this.props.addItem(value, timeInSeconds) // Передаем текст задачи и время
      this.setState({ value: '', minutes: '', seconds: '' }) // Очищаем поля формы
    }
  }

  render() {
    return (
      <form className="header" onSubmit={this.handleSubmit}>
        <h1>TODO</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          type="number"
          min="0"
          value={this.state.minutes}
          onChange={(e) => this.setState({ minutes: e.target.value })}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          type="number"
          min="0"
          max="59"
          value={this.state.seconds}
          onChange={(e) => this.setState({ seconds: e.target.value })}
        />
        <button type="submit" style={{ display: 'none' }} /> {/* Скрытая кнопка для отправки формы */}
      </form>
    )
  }
}
