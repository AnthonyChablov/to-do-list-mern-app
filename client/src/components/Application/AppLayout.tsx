import {useEffect} from 'react';
import { motion } from 'framer-motion';
import { shallow } from 'zustand/shallow'
import { useQuery } from "react-query"; 
import {AiOutlineMenu} from 'react-icons/ai';
import Header from "./Header/Header";
import Card from "./Card/Card";
import Toolbar from "./Toolbar/Toolbar";
import { deleteTodo } from "../../api/Todo/deleteTodo";
import { useTodosStore } from "../../store/Todo/todosStore";
import { useUserStore } from '../../store/User/userStore';
import { useDrawerStore } from '../../store/Drawer/drawerStore';
import ModalDialog from "./ModalDialog/ModalDialog";
import { useIsOverflow } from "../../hooks/useIsOverflow"; // ****
import Loading from "../Loading/Loading";
import { Sidebar } from './Sidebar/Sidebar';
const AppLayout = () => {

  /* State*/
  const { todos, fetchTodos, removeTodo } = useTodosStore(
    (state) => ({ 
      todos: state.todos, 
      fetchTodos: state.fetchTodos,
      removeTodo: state.removeTodo,
    }), shallow
  );
  const loggedInUser = useUserStore(state => state.loggedInUser);
  const isOpen = useDrawerStore(state => state.isOpen);
  const setIsOpen = useDrawerStore(state => state.setIsOpen);
  const fetchLoggedInUser = useUserStore(state => state.fetchLoggedInUser);

  async function handleDeleteTodo(todoId : string){
    await deleteTodo(todoId); // Call to api
    removeTodo(todoId); // Change UI 
  };

  /* React Query Fetch All Todos */
  const {isLoading, data: fetchedTodos} = useQuery( 
    'todos', 
    ()=>fetchTodos 
  );

  useEffect(()=>{
    fetchLoggedInUser();
    console.log(loggedInUser);
  },[loggedInUser?.email]);

  /* Render Todo Items */
  const todoItems = todos.map((todo: any, i:number)=>{
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
        animationProperty = {i}
      />
    )
  });

  return (
    <div className="pt-6 h-screen max-h-screen  overflow-auto 
      bg-slate-100 font-Roboto">
      <div className="px-4 w-[87%] max-w-[90rem] mx-auto">
        <div className=" flex items-center">
          <button className="px-3 py-3 mr-8 text-1xl border-4 text-gray-200 border-white rounded-full bg-gradient-to-r 
          from-red-400 
          via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 
          dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80  "
          onClick={(open)=> setIsOpen(!open)}
          >
            <AiOutlineMenu size={18}/>
          </button>
          <Header userFirstName={loggedInUser?.firstName}/>
          
        </div>
        
        <motion.div className="pt-8 flex flex-col md:flex-none md:grid 
          md:grid-cols-2 lg:grid-cols-3 items-center "
        >
          { 
            /* Render cards */
            isLoading 
              ? <Loading/> 
              : todoItems
          }
        </motion.div>
      </div>
      <Toolbar/>
      <ModalDialog/>
      <Sidebar/>
    </div>
  );
};

export default AppLayout