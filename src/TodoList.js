import React from 'react'
import Todo from './Todo'

function filterTodos(todos, filter) {
  if (filter === 'all') {
    return todos
  }

  return filter === 'completed'
    ? todos.filter(todo => todo.completed)
    : todos.filter(todo => !todo.completed)
}

export function TodoList({ todos, onTodoComplete, filter, onTodoDelete }) {
  const filteredTodos = filterTodos(todos, filter)

  return (
    <ul>
      {filteredTodos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={onTodoComplete}
          onDelete={onTodoDelete}
        />
      ))}
    </ul>
  )
}
