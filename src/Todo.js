import React from 'react'
import styled from 'styled-components'

const Label = styled.label``

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin: 0 10px;
`
const StyledTodo = styled.li`
  list-style: none;
  padding: 0 10px;
`
const DeleteButton = styled.span`
  margin: 0 10px;
`
function Todo({ todo, onComplete, onDelete }) {
  return (
    <StyledTodo>
      <Label>
        <Checkbox onChange={() => onComplete(todo)} checked={todo.completed} />
        {todo.text}
      </Label>
      <DeleteButton onClick={() => onDelete(todo)}>
        {String.fromCodePoint(0x274e)}
      </DeleteButton>
    </StyledTodo>
  )
}

export default Todo
