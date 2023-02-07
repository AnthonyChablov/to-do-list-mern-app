import create from 'zustand';
import { TTodo } from '../api/Todo/getTodos';
import { getTodos } from '../api/Todo/getTodos';


interface ITodos{
    todos: TTodo[],
    setTodos: (newTodos : []) => void,
    fetchTodos: Function,
    addTodo: Function,
    removeTodo: Function,
};


export const useTodosStore = create <ITodos>((set)=>({
    todos: [],
    setTodos: (newTodos : []) => set({ todos: newTodos }),
    fetchTodos : async () => {
        const fetchedTodos = await getTodos();
        set({todos: fetchedTodos})
    },
    addTodo: (newTodo:any) => set((prevState) => (
        {todos: [...prevState.todos, newTodo]}
    )),
    removeTodo : (todoId:any) => set((prevState)=>(
        {todos : [...prevState.todos].filter((todo)=> todo._id !== todoId)}
    ))

}));