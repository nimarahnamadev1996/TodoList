import React, { useState,createContext, useContext } from 'react'
import {v4 as uuidv4} from 'uuid'



export const NewContext = createContext()


export const AppDataProvider = ({children}) => {


    const [todos,setTodos] = useState([
        {id: uuidv4(), name: 'Eating breakfast', status: false},
        {id: uuidv4(), name: 'Doing homework', status: false},
        {id: uuidv4(), name: 'Buying', status: true},
    ])


    const addTodo = () => {

        if(event.target.value === '') {
            return ''
        } else {
            
            if(event.key === 'Enter'){
                const newTodo = {id:uuidv4(), name: event.target.value, status: false}
                setTodos([...todos, newTodo])
                event.target.value = ''
              }
        }
    }


    const statusHandler = (todoId) => {

      const updatedTodo = todos.map((item) => {
        if(item.id === todoId) {
            item.status = !item.status 
            return item
        }
        return item
       }
    )

    setTodos(updatedTodo)
    }


    const removeTodoHandler = (todoId) => {
      const updatedDeleteTodo = todos.filter((item) => {
            return item.id !== todoId
        })
        
        setTodos(updatedDeleteTodo)
    }


    const changeHandler = (todoId,newName) => {

      const updatedEdit =  todos.map((item) => {
            if(item.id == todoId){
                item.name = newName
                return item
            }

            return item
        })

        setTodos(updatedEdit)
    } 


    return(
        <NewContext.Provider 
        value={{todos,addTodo,statusHandler,removeTodoHandler,changeHandler}}>
            {children}
        </NewContext.Provider>
    )

}



export const useGlobalContext = () => {
    return useContext(NewContext);
  };