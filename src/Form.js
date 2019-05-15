import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  width: 80px;
  background: papayawhip;
  color: green;
  margin: 10px 5px;
`
const StyledForm = styled.form``

export function Form({ onSubmitTodo }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target

    onSubmitTodo(form.todo.value)
    form.reset()
    form.todo.focus()
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input name='todo' type='text' placeholder='Type to-do here' />
      <Button>+</Button>
    </StyledForm>
  )
}
