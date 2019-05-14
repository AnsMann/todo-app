import React, { useState, useEffect } from 'react'
import { Form } from './Form'
import styled from 'styled-components'
import { Todo } from './Todo'
import { Filterbutton } from './Filterbuttons'
import { setStorage, getStorage } from './services'

const uid = require('uid')

const Headline = styled.h1`
  color: skyblue;
`

function App() {
  const [todos, setTodo] = useState(getStorage('todos') || [])
  const [filtertodos, setFiltertodos] = useState(getStorage('filter') || '')

  useEffect(() => {
    setStorage('filter', filtertodos)
    setStorage('todos', todos)
  }, [todos, filtertodos])

  return (
    <>
      <Headline>Another awesome to-do-App</Headline>
      <Form onSubmitTodo={handleSubmitTodo} />
      <Filterbutton
        buttonName='All'
        onClickFilterButton={handleFilterbuttonClick}
      />
      <Filterbutton
        buttonName='Completed'
        onClickFilterButton={handleFilterbuttonClick}
      />
      <Filterbutton
        buttonName='Open'
        onClickFilterButton={handleFilterbuttonClick}
      />
      <Todo todos={todos} onCheck={handleCheckboxClick} filter={filtertodos} />
    </>
  )

  function handleSubmitTodo(event) {
    event.preventDefault()
    if (event.target.todo.value) {
      setTodo([
        ...todos,
        { id: uid(), text: event.target.todo.value, completed: false }
      ])
      setFiltertodos('')
    }
    event.target.reset()
    event.target.todo.focus()
  }

  function handleCheckboxClick(clickedTodo) {
    const index = todos.findIndex(todo => todo.id === clickedTodo.id)
    setTodo([
      ...todos.slice(0, index),
      { ...clickedTodo, completed: !clickedTodo.completed },
      ...todos.slice(index + 1)
    ])
  }

  function handleFilterbuttonClick(ButtonName) {
    setFiltertodos(ButtonName.toLowerCase())
  }
}

export default App
