import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  width: 80px;
  background: papayawhip;
  color: green;
  margin: 10px 5px;
`

export function Form({ onSubmitTodo }) {
  return (
    <form onSubmit={onSubmitTodo}>
      <input name='todo' type='text' placeholder='Type to-do here' />
      <Button>+</Button>
    </form>
  )
}
