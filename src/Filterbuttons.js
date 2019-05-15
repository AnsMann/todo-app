import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: ${props => (props.active ? 'skyblue' : 'papayawhip')};
  color: green;
`

export function Filterbutton({ onClick, children, active }) {
  return (
    <Button active={active} onClick={onClick}>
      {children}
    </Button>
  )
}
