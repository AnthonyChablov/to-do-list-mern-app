import { useRef} from 'react';
import { motion,  } from 'framer-motion';
import { shallow } from 'zustand/shallow'
import { useQuery } from "react-query"; 
import {AiOutlineMenu} from 'react-icons/ai';
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
import { TTodo } from '../../api/Todo/getTodos';
import { noTaskVariants, buttonVariants } from '../../variants';

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

  /* Fetch Data */
    /* Fetch All Todos */
  const {isLoading : loadingFetchTodos, isError: isErrorFetchTodos,  data : fetchedTodos, isFetching:isFetchTodos } = useQuery( 
    ['todos', loggedInUser], 
    ()=>fetchTodos,
  );

  /* Fetch User and assign state */
  const {isLoading : loadingFetchLoggedInUser, isError: isErrorFetchLoggedInUser, data : fetchedUser,  isFetching:isFetchLoggedInUser} = useQuery( 
    ['loggedInUser', loggedInUser], 
    ()=>fetchLoggedInUser,
  ); 
  
  /* Helper Functions */
  async function handleDeleteTodo(todoId : string){
    await deleteTodo(todoId); // Call to api
    removeTodo(todoId); // Change UI 
  };

  // we are mutatin fetched data array into card components
  const todoItems = Array.isArray(todos) 
    ? todos.map((todo: TTodo, i:number)=>{
      return ( 
        <Card
          key={todo?._id}
          id={todo?._id}
          title={todo?.title}
          description={todo?.description}
          isCompleted={todo?.isCompleted}
          startDate={todo?.startDate}
          dueDate = {todo?.dueDate}
          handleDeleteTodo= {handleDeleteTodo}
          animationProperty = {i}
        />
      )
    } )
    : '';

  return (
    <div> 
      {
        <div className={`pt-6 h-screen max-h-screen  overflow-auto dark:bg-zinc-800 dark:text-gray-100
          bg-slate-100 font-Roboto pb-52`}
        > 
        {/* content container */}
          <motion.div className="px-4 w-[87%] max-w-[90rem] mx-auto"
          >
            <div className=" flex items-center justify-center">
              {
                !isFetchLoggedInUser 
                  ? (
                      <>
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
                        <Header 
                          userFirstName={
                            !isErrorFetchLoggedInUser 
                              ? loggedInUser?.firstName
                              : ''
                          }
                        />
                      </>
                    )
                  : ''
              }
            </div>
            <motion.div className={`pt-11 flex flex-col md:flex-none md:grid items-center 
              ${todos.length < 3 
                ? 'md:grid-cols-1 lg:grid-cols-1 justify-items-center' 
                : 'md:grid-cols-2 lg:grid-cols-3'
              } `
              }
            >
            {/* Render cards */}
              { 
                isFetchTodos 
                  ? <Loading/> 
                  : !isErrorFetchTodos 
                    ? todoItems.length === 0 
                      ? <motion.p className ='text-md text-gray-500 dark:text-gray-200  pt-20 font-Roboto'
                          variants={noTaskVariants}
                          initial={'initial'}
                          animate={'animate'}
                        > No Tasks, Please add a task.
                        </motion.p> 
                      : todoItems
                    : ''
              }
            </motion.div>
          </motion.div>
          <Toolbar/>
          <ModalDialog/>
          <Sidebar/>
        </div>
      }
    </div>
  );
}


export default AppLayout;