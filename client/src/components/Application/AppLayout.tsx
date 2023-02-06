import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Toolbar from "./Toolbar/Toolbar";
import { TTodo } from "../../api/Todo/getTodos";
import {getTodos} from '../../api/Todo/getTodos'


const AppLayout = () => {
  /* state */
  const [todos, setTodos] = useState <TTodo[]>([]);

  
  async function fetchTodos(){
    const newTodos = await getTodos();
    
    setTodos(newTodos);
    
  }

  useEffect(() => {
    fetchTodos();
    console.log(todos);
  }, []);
  

  return (
    <div className="px-7 pt-5 h-screen max-h-screen overflow-auto bg-slate-100">
      <div className="bg- ">
        <Header/>
      </div>
      <div className="">
        <Toolbar/>
      </div>
      
      {/* 
        TODO 

        - Make API call and retrieve all TODOS
        
        - Create Card component responsioble for displaying the data, 
        
        - Create Tool bar with: 
        1. Clickable button that display Modal
        2. Modal contains Form with PARAMS that POSTS to DB with newly created TODO 
      */}

    </div>
  )
}

export default AppLayout