import React, { useState, useEffect } from 'react'
import { Form } from './Form'
import styled, { createGlobalStyle } from 'styled-components'
import { TodoList } from './TodoList'
import { Filterbutton } from './Filterbuttons'
import { setStorage, getStorage } from './services'

const uid = require('uid')

const Grid = styled.div`
  display: grid;
  grid-template-rows: 30px 40px auto 80px;
  height: 100vh;
`

const Headline = styled.h1`
  color: skyblue;
  font-size: 20px;
`

const Footer = styled.footer`
  background-color: slategray;
`

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0
  }
`

function App() {
  const [todos, setTodos] = useState(getStorage('todos') || [])
  const [filter, setFilter] = useState(getStorage('filter') || 'all')

  useEffect(() => {
    setStorage('todos', todos)
  }, [todos])

  useEffect(() => {
    setStorage('filter', filter)
  }, [filter])

  function handleSubmitTodo(text) {
    if (text.trim()) {
      const todo = { id: uid(), text, completed: false }
      setTodos([...todos, todo])
      setFilter('all')
    }
  }

  function handleTodoComplete(todoToComplete) {
    const index = todos.findIndex(todo => todo.id === todoToComplete.id)
    setTodos([
      ...todos.slice(0, index),
      { ...todoToComplete, completed: !todoToComplete.completed },
      ...todos.slice(index + 1)
    ])
  }

  function handleFilter(filter) {
    setFilter(filter)
  }

  function handleTodoDelete(todoToDelete) {
    const newtodos = todos.filter(todo => todo.id !== todoToDelete.id)
    setTodos(newtodos)
  }

  const filters = [
    { id: 'all', label: 'All Items' },
    { id: 'completed', label: 'Completed' },
    { id: 'active', label: 'Active' }
  ]

  return (
    <Grid>
      <GlobalStyles />
      <Headline>Another awesome to-do-App</Headline>
      <Form onSubmitTodo={handleSubmitTodo} />
      <TodoList
        todos={todos}
        onTodoComplete={handleTodoComplete}
        filter={filter}
        onTodoDelete={handleTodoDelete}
      />
      <Footer>
        {filters.map(filterObj => (
          <Filterbutton
            active={filterObj.id === filter}
            onClick={() => handleFilter(filterObj.id)}
          >
            {filterObj.label}
          </Filterbutton>
        ))}
      </Footer>
    </Grid>
  )
}

export default App
