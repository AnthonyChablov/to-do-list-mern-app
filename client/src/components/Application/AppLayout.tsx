import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Toolbar from "./Toolbar/Toolbar";
import { TTodo } from "../../api/Todo/getTodos";
import {getTodos} from '../../api/Todo/getTodos'

const AppLayout = () => {

  const [todos, setTodos] = useState <TTodo[]>([]);
  
  async function fetchTodos(){
    const newTodos = await getTodos();
    setTodos(newTodos);
    
  }

  useEffect(() => {
    fetchTodos();
    
  }, []);
  

  /* Render Todo Items */
  const todoItems = todos.map((todo: any, index: number)=>{
    return <Card 
      key={index}
      title={todo?.title}
      description={todo?.description}
      startDate={todo?.startDate}
      dueDate = {todo?.dueDate}
      isDone= {todo?.isDone}
    />
  })

  return (
    <div className="pt-5 h-screen max-h-screen overflow-auto bg-slate-100">
      <div className="px-4 ">
        <div className="pb-6">
          <Header/>
        </div>
        <div className="flex flex-col items-center">
          {
            todoItems
          }
        </div>
      </div>
      <div className="">
        <Toolbar/>
      </div>
      
      {/* 
        TODO 

        - Make API call and retrieve all TODOS  --- COMPLETED
        
        - Create Card component responsioble for displaying the data -- pass in props that pertain to data 0 --- COMPLETED
        - Map out cards per each TODO instance in DB -- COMPLETED
        
        - Create Tool bar with: 
        1. Clickable button that display Modal
        2. Modal contains Form with PARAMS that POSTS to DB with newly created TODO 
      */}

    </div>
  )
}

export default AppLayout