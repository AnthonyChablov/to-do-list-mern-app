
import { shallow } from 'zustand/shallow'
import Header from "./Header/Header";
import Card from "./Card/Card";
import Toolbar from "./Toolbar/Toolbar";
import { deleteTodo } from "../../api/Todo/deleteTodo";
import { useTodosStore } from "../../store/todosStore";
import ModalDialog from "./ModalDialog/ModalDialog";
import { useIsOverflow } from "../../hooks/useIsOverflow";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

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

  /* React Query Fetch All Todos */
  const {isLoading, data: fetchedTodos} = useQuery( 
    'todos', 
    ()=>fetchTodos 
  );

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
          {
            isLoading 
              ? <Loading/> 
              : todoItems
          }
        </div>
      </div>
      <div className="">
        <Toolbar/>
      </div>
      
      {/* 
        TODO

          1a) Refactor api fetch code to utilize react query

          3b--  Familiraize urself with use refs
              -- Learn how to utilize them in the useIsOverflow hook u found
              -- Once the todo container is initially overflowing add some padding to the bottom ONLY ONCE 
              -- If it is not overflowing remove the padding 
          
          4a -- Make the card display responsive And a custom respsonsive desktop layout

          5 -- Refactor code making use of react query --- look at web dev C's mern stack tutorial making usage of react query 

          6-- Look at authenticatino using JWT
      */}
      <ModalDialog/>
    </div>
  )
}

export default AppLayout