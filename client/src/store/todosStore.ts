import create from 'zustand';
import { TTodo } from '../api/Todo/getTodos';
import { getTodos } from '../api/Todo/getTodos';

interface ITodos{
    todos: TTodo[],
    setTodos: (newTodos : []) => void,
    fetchTodos: Function,
    addTodo: Function,
    removeTodo: Function,
    updateTodoUI: Function
};

export const useTodosStore = create <ITodos>((set, get)=>({
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
    )),
    updateTodoUI : (id: string, title: string, description: string, startDate: Date, dueDate:Date) => {
        const { todos } = get();
        set({
          todos: todos.map(todo =>({
            ...todo,
            title: todo._id === id ? title : todo.title,
            description: todo._id === id ? description : todo.description,
            startDate: todo._id === id ? startDate : todo.startDate,
            dueDate: todo._id === id ? dueDate : todo.dueDate,
          }))
        })
      }

}));