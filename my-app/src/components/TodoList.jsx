import React from 'react'
import TodoItem from './TodoItem'
import { useGlobalContext } from '../contexts/NewContext'

const TodoList = () => {

  const {todos} = useGlobalContext()

  return (
    <div>
        <ul className="list-reset">
              {
                todos.map((todo, index) => (
                    <TodoItem 
                     todo={todo} 
                     key={index}/>
                ))
              }
        </ul>
    </div>
  )
}

export default TodoList