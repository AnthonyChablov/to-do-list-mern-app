import { useEffect } from "react";
import { shallow } from 'zustand/shallow'
import Header from "./Header/Header";
import Card from "./Card/Card";
import Toolbar from "./Toolbar/Toolbar";
import ModalDialog from "./ModalDialog/ModalDialog";
import { deleteTodo } from "../../api/Todo/deleteTodo";
import { useTodosStore } from "../../store/todosStore";

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
    <div className="pt-5 h-screen max-h-screen overflow-auto bg-slate-100 font-Roboto">
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
      
          1-- Update task function handler needs an id to pass into form copmonent, However that Id is nested within card component
          Two different parents and child, how to solve this problem???

          2a-- Revamp card layout to include button for edit which enables user to update an existing task  
              -- ADD PUT functionality on each CARD
              -- Maybe even revamp the styling of it all idk 
              -- look at designs on dribble for inspiration

          

          4-- 

      */}
      <ModalDialog/>
    </div>
  )
}

export default AppLayout