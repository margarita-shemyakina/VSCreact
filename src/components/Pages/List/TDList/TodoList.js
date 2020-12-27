import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import {ListGroup} from 'react-bootstrap'


const TodoList = ({ filteredTodos, actions }) => (
  <ListGroup className="todo-list">
    {filteredTodos.map(todo =>
    <ListGroup.Item variant="warning">
      <TodoItem key={todo.id} todo={todo} {...actions} />
    </ListGroup.Item>     
    )}
  </ListGroup>
)

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default TodoList