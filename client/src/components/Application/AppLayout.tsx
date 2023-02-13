import { useEffect } from "react";
import { shallow } from 'zustand/shallow'
import Header from "./Header/Header";
import Card from "./Card/Card";
import Toolbar from "./Toolbar/Toolbar";
import { deleteTodo } from "../../api/Todo/deleteTodo";
import { useTodosStore } from "../../store/todosStore";
import ModalDialog from "./ModalDialog/ModalDialog";
import { useIsOverflow } from "../../hooks/useIsOverflow";

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
    <div className="pt-6  h-screen max-h-screen overflow-auto bg-slate-100 font-Roboto">
      <div className="px-4">
        <div className="pb-2 px-5">
          <Header/>
        </div>
        <div className="flex flex-col items-center pt-5">
          {todoItems}
        </div>
      </div>
      <div className="">
        <Toolbar/>
      </div>
      
      {/* 
        TODO

          2a-- Revamp card layout to include button for edit which enables user to update an existing task  -- COMPLETED
              -- ADD PUT functionality on each CARD -- COMPLETED
              -- Revamp the styling of it all idk  
              -- look at designs on dribble for inspiration

          3b--  Familiraize urself with use refs
              -- Learn how to utilize them in the useIsOverflow hook u found
              -- Once the todo container is initially overflowing add some padding to the bottom ONLY ONCE 
              -- If it is not overflowing remove the padding 
          
          4a -- Make the card display responsive And a custom respsonsive desktop layout

      */}
      <ModalDialog/>
    </div>
  )
}

export default AppLayout