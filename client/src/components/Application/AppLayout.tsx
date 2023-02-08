import { useEffect } from "react";
import { shallow } from 'zustand/shallow'
import { useTodosStore } from "../../store/todosStore";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Toolbar from "./Toolbar/Toolbar";
import { deleteTodo } from "../../api/Todo/deleteTodo";

const AppLayout = () => {
  
  /* Retrieve todos Store State from Zustand */
  const { 
    todos, 
    fetchTodos, 
    removeTodo, 
  } = useTodosStore(
    (state) => ({ 
      todos: state.todos, 
      fetchTodos: state.fetchTodos ,
      removeTodo: state.removeTodo ,
    }),
    shallow
  );

  async function handleDeleteTodo(todoId : string){
    await deleteTodo(todoId); // Call to api
    removeTodo(todoId); // Change UI 
  } 

  useEffect(() => {
    fetchTodos();
  }, []);

  /* Render Todo Items */
  const todoItems = todos.map((todo: any)=>{
    return (
    
      <Card 
        key={todo?._id}
        id={todo?._id}
        title={todo?.title}
        description={todo?.description}
        startDate={todo?.startDate}
        dueDate = {todo?.dueDate}
        isDone= {todo?.isDone}
        handleDeleteTodo= {handleDeleteTodo}
      />
   
    )
  })

  return (
    <div className="pt-5 h-screen max-h-screen overflow-auto bg-slate-100 ">
      <div className="px-4 ">
        <div className="pb-6">
          <Header/>
        </div>
        <div className="flex flex-col items-center pt-8">
          {todoItems}
        </div>
      </div>
      <div className="">
        <Toolbar/>
      </div>
      
      {/* 
        TODO
      
          1-- Add a means of updating a Todo Task in API -- COMPLETED

          2a-- Revamp card layout to include button for edit which enables user to update an existing task  
              -- Maybe even revamp the styling of it all idk 
              -- look at designs on dribble for inspiration

          2b -- FRAMER MOTION TIME
            Make the card layout look sexier -- onclick of todo card expands it, 
            -- investigate framer motion variants 

          3-- Find a way to display this updated task to the ui 

          4-- 

      */}
    </div>
  )
}

export default AppLayout