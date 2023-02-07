import { useEffect } from "react";
import { shallow } from 'zustand/shallow'
import { useTodosStore } from "../../store/todosStore";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Toolbar from "./Toolbar/Toolbar";
import { deleteTodo } from "../../api/Todo/deleteTodo";
import { createTodo } from "../../api/Todo/createTodo";

const AppLayout = () => {
  
  /* Retrieve todos Store State from Zustand */
  const { 
    todos, 
    fetchTodos, 
    removeTodo, 
    addTodo 
  } = useTodosStore(
    (state) => ({ 
      todos: state.todos, 
      fetchTodos: state.fetchTodos ,
      removeTodo: state.removeTodo ,
      addTodo: state.addTodo,
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
    return <Card 
      key={todo?._id}
      id={todo?._id}
      title={todo?.title}
      description={todo?.description}
      startDate={todo?.startDate}
      dueDate = {todo?.dueDate}
      isDone= {todo?.isDone}
      handleDeleteTodo= {handleDeleteTodo}
    />
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
        - Make API call and retrieve all TODOS  --- COMPLETED
        
        - Create Card component responsioble for displaying the data -- pass in props that pertain to data 0 --- COMPLETED
        - Map out cards per each TODO instance in DB -- COMPLETED
        
        - Create Tool bar with: 
        1. Clickable button that display Modal -- COMPLETED
        2. Style MODAL to make it look nice -- completed

        3.a Look into a state management solution, dont wanna be drilling so deep with so much shit
        Figure out Zustand 

        3.b Reformat state code to make it so they are accesible anywhere including nested child copmonent
          In addition add function that handles api call so it can be accessed anywhere

        3.c Modal contains Form with PARAMS that POSTS to DB with newly created TODO -- 50% complete
      */}
    </div>
  )
}

export default AppLayout