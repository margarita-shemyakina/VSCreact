import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './tdibtn.css'

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)} />
          <label>
            {todo.text}
          </label>
          <button className="btn"
                  onClick={() => deleteTodo(todo.id)}>DELETE</button>
        </div>
      )
    
    return (
      <li>
        {element}
      </li>
    )
  }
}
