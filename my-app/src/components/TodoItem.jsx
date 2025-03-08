import React, { useState } from 'react'
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'
import { useGlobalContext } from '../contexts/NewContext'

const TodoItem = ({todo}) => {

  const [editMode,setEditMode] = useState(false)

  const {changeHandler,statusHandler} = useGlobalContext()

    const closeInput = () => {
        if(event.key === 'Enter') {
            changeHandler(todo.id,event.target.value)
            setEditMode(false)
        }
    }

  return (
   <div>
       <li 
        className="relative flex items-center justify-between px-2 py-6 border-b">

         {
            editMode ? 
            <input 
            type='text'
            defaultValue={todo.name}
            onKeyDown={() => {closeInput(event)}}
            className="w-full px-2 py-3 border rounded outline-none border-grey-600"/>
            : (
               <div>
                <div>
                    <input 
                     type="checkbox" 
                     checked={todo.status} 
                     onChange={() => statusHandler(todo.id)}/>

                     <p 
                      className={`inline-block mt-1 ml-2 text-gray-600 ${todo.status ? 'line-through' : ''}`}>
                        {todo.name}
                     </p>
                </div>

                <button 
                 type="button" 
                 className="absolute right-0 flex items-center space-x-1">
                   <EditTodo setEditMode={setEditMode}/>
                   <DeleteTodo todo={todo} />
                </button>
               </div> 
            )
         }

                
                </li>
   </div>
  )
}

export default TodoItem