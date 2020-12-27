import {
  DELETE_TODO,
  COMPLETE_TODO,
} from '../../constants/ActionTypes'

const initialState = [
  {
    text: 'ITEM 1',
    completed: false,
    id: 0
  },
  {
    text: 'ITEM 2',
    completed: false,
    id: 1
  },
  {
    text: 'ITEM 3',
    completed: false,
    id: 2
  },
  {
    text: 'ITEM 4',
    completed: false,
    id: 3
  },
  {
    text: 'ITEM 5',
    completed: false,
    id: 4
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    default:
      return state
  }
}
