import React from 'react'
import { useGlobalContext } from '../contexts/NewContext'

const DeleteTodo = ({todo}) => {

  const {removeTodoHandler} = useGlobalContext()

  return (
    <div>
         <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-5 h-5 text-red-700" 
          fill="none" 
          viewBox="0 0 24 24"
          stroke="currentColor" 
          strokeWidth="2"
          onClick={() => removeTodoHandler(todo.id)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>
  )
}

export default DeleteTodo