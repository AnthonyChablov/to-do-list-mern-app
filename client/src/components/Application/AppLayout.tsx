
import { shallow } from 'zustand/shallow'
import Header from "./Header/Header";
import Card from "./Card/Card";
import Toolbar from "./Toolbar/Toolbar";
import { deleteTodo } from "../../api/Todo/deleteTodo";
import { useTodosStore } from "../../store/todosStore";
import ModalDialog from "./ModalDialog/ModalDialog";
import { useIsOverflow } from "../../hooks/useIsOverflow"; // ****
import { useQuery } from "react-query"; 
import Loading from "../Loading/Loading";

const AppLayout = () => {
  /* Retrieve todos Store State from Zustand */
  const { 
    todos, fetchTodos, removeTodo, 
  } = useTodosStore(
    (state) => ({ 
      todos: state.todos, 
      fetchTodos: state.fetchTodos,
      removeTodo: state.removeTodo,
    }), shallow
  );

  async function handleDeleteTodo(todoId : string){
    await deleteTodo(todoId); // Call to api
    removeTodo(todoId); // Change UI 
  };

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
  });

  return (
    <div className="pt-6 h-screen max-h-screen  overflow-auto 
      bg-slate-100 font-Roboto">
      <div className="px-4 w-[87%] max-w-[90rem] mx-auto">
        <Header/>
        <div className="pt-8 flex flex-col md:flex-none md:grid 
          md:grid-cols-2 lg:grid-cols-3 items-center ">
          { /* Render cards */
            isLoading 
              ? <Loading/> 
              : todoItems
          }
        </div>
      </div>
      <Toolbar/>
      <ModalDialog/>
    </div>
  );
};

export default AppLayout