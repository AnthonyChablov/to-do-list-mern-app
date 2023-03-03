import { useRef, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { shallow } from 'zustand/shallow'
import { useQuery } from "react-query"; 
import {AiOutlineMenu} from 'react-icons/ai';
import { redirect, useNavigate } from 'react-router-dom';
import Header from "./Header/Header";
import Card from "./Card/Card";
import Toolbar from "./Toolbar/Toolbar";
import Loading from "../Loading/Loading";
import ModalDialog from "./ModalDialog/ModalDialog";
import { deleteTodo } from "../../api/Todo/deleteTodo";
import { useTodosStore } from "../../store/Todo/todosStore";
import { useUserStore } from '../../store/User/userStore';
import { useDrawerStore } from '../../store/Drawer/drawerStore';
import useIsOverflow  from "../../hooks/useIsOverflow"; // ****
import { Sidebar } from './Sidebar/Sidebar';
import { getLoggedInUser } from '../../api/User/getLoggedInUser';

/* framer-motion config */
const buttonVariants : Variants={
  initial:{
      opacity:0
  },
  animate:{
      opacity:1,
      transition:{
          type: 'tween',
          ease: 'easeInOut',
          duration: .375,
          when: '',
      }
  },
}

const AppLayout = () => {

  /* State */
  const { todos, fetchTodos, removeTodo } = useTodosStore(
    (state) => ({ 
      todos: state.todos, 
      fetchTodos: state.fetchTodos,
      removeTodo: state.removeTodo,
    }), shallow
  );
  const setIsOpen = useDrawerStore(state => state.setIsOpen);
  const loggedInUser = useUserStore(state => state.loggedInUser);
  const fetchLoggedInUser = useUserStore(state => state.fetchLoggedInUser);

  /* Hooks */
  const layoutRef = useRef<HTMLInputElement>(null); 
  const isOverflow = useIsOverflow(layoutRef);
  const navigate = useNavigate();

  /* Fetch All Todos */
  const {isLoading : loadingFetchTodos, isError: isErrorFetchTodos,  data : fetchedTodos} = useQuery( 
    'todos', 
    ()=>fetchTodos 
  );

  /* Fetch Logged In User */
  const {isLoading : loadingFetchLoggedInUser, isError: isErrorFetchLoggedInUser, data : fetchUser,} = useQuery( 
    'loggedInUser', 
    ()=>fetchLoggedInUser,
  ); 

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
  async function handleDeleteTodo(todoId : string){
    await deleteTodo(todoId); // Call to api
    removeTodo(todoId); // Change UI 
  };

  
  /* if user not logged in redirect */
  /*  
  useEffect(()=>{
    if (!fetchUser ){
      navigate('/login')
    }
  },[]) */

  return (
    <div className={`pt-6 h-screen max-h-screen  overflow-auto dark:bg-zinc-800 dark:text-gray-100
      bg-slate-100 font-Roboto ${!isOverflow && 'pb-52' }`
      }
      ref={layoutRef }
    >
      <div className="px-4 w-[87%] max-w-[90rem] mx-auto">
        <div className=" flex items-center justify-center">
          <motion.button className="px-3 py-3 mr-8 text-1xl border-4 text-gray-200 
          border-white rounded-full bg-gradient-to-r from-red-400 
          via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 
          dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80  "
            variants={buttonVariants}
            initial={'initial'}
            animate={'animate'}
            onClick={(open)=> setIsOpen(!open)}
          >
            <AiOutlineMenu size={18}/>
          </motion.button>
          {
            !loadingFetchLoggedInUser 
            && 
            <Header 
              userFirstName={
                !isErrorFetchLoggedInUser 
                  ? loggedInUser?.firstName
                  : ''
              }
            />
          }
        </div>
        <motion.div className="pt-11 flex flex-col md:flex-none md:grid 
          md:grid-cols-2 lg:grid-cols-3 items-center "
        >
          { 
            /* Render cards */
            loadingFetchTodos 
              ? <Loading/> 
              :  !isErrorFetchTodos ? todoItems : ''
          }
        </motion.div>
      </div>
      <Toolbar/>
      <ModalDialog/>
      <Sidebar/>
    </div>
  );
};


export default AppLayout;