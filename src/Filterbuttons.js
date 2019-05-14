import React from 'react'
import { Button } from './Form'

export function Filterbutton({ onClickFilterButton, buttonName }) {
  return (
    <Button onClick={() => onClickFilterButton(buttonName)}>
      {buttonName}
    </Button>
  )
}
