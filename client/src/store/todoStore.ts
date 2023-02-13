import create from 'zustand';

interface ITodo {
    title: String | string,
    setTitle : (newTitle : String) => void,
    description: String | string,
    setDescription : (newDescription : String)=>void,
    startDate : Date,
    setStartDate : (newStartDate : Date)=> void,
    dueDate : Date, 
    setDueDate : (newEndDate : Date) => void
};


export const useTodoStore = create<ITodo>((set)=>({
    title: '',
    setTitle : (newTitle : String) => set({ title: newTitle }),
    description: '',
    setDescription : (newDescription : String) => set({ description: newDescription }),
    startDate : new Date,
    setStartDate : (newStartDate : Date)=> set({ startDate: newStartDate }),
    dueDate : new Date, 
    setDueDate : (newDueDate : Date) => set({ dueDate: newDueDate })
}));

