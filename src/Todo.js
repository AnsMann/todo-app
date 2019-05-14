import React from 'react'
import styled from 'styled-components'

const SingleTodo = styled.label`
  margin: 10px 0;
`
const Checkbox = styled.input`
  margin: 0 10px;
`
const ListTodo = styled.li`
  list-style: none;
`

export function Todo({ todos, onCheck, filter }) {
  switch (filter) {
    case 'all':
      return renderTodo(todos, onCheck)
    case 'completed':
      return renderTodo(todos.filter(todo => todo.completed), onCheck)
    case 'open':
      return renderTodo(todos.filter(todo => !todo.completed), onCheck)
    default:
      return renderTodo(todos.filter(todo => !todo.completed), onCheck)
  }
}

function renderTodo(todos, onCheck) {
  return todos.map(todo => (
    <ListTodo key={todo.id}>
      <SingleTodo>
        <Checkbox
          onChange={() => onCheck(todo)}
          checked={todo.completed}
          type='checkbox'
        />
        {todo.text}
      </SingleTodo>
    </ListTodo>
  ))
}
