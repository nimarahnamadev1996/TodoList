

import { useGlobalContext } from '../contexts/NewContext'
import TodoList from './TodoList'

const Todo = () => {

    const {addTodo} = useGlobalContext()

    
  return (
    <div className="bg-gray-100">

    <div className="flex items-center justify-center h-screen">

        <div className="w-full px-4 py-8 mx-auto shadow lg:w-2/4  bg-white">
            <div className="flex items-center mb-6">
                <h1 className="mr-6 text-4xl font-bold text-blue-600"> 
                    To-Do Project
                </h1>
            </div>

            <div className="relative">
                <input 
                 type="text" 
                 placeholder="What needs to be done today?"
                className="w-full px-2 py-3 border rounded outline-none border-grey-600"
                onKeyDown={addTodo}/>
            </div>

            <TodoList/>
            
        </div>
    </div>
</div>
  )
}

export default Todo