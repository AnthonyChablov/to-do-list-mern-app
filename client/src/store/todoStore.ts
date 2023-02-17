import create from 'zustand';
import { Dayjs } from 'dayjs';
interface ITodo {
    title: String | string,
    setTitle : (newTitle : String) => void,
    description: String | string,
    setDescription : (newDescription : String)=>void,
    startDate : Dayjs | null,
    setStartDate : (newStartDate : Dayjs | null)=> void,
    dueDate : Dayjs | null, 
    setDueDate : (newEndDate : Dayjs | null) => void
};


export const useTodoStore = create<ITodo>((set)=>({
    title: '',
    setTitle : (newTitle : String) => set({ title: newTitle }),
    description: '',
    setDescription : (newDescription : String) => set({ description: newDescription }),
    startDate : null,
    setStartDate : (newStartDate : Dayjs | null)=> set({ startDate: newStartDate }),
    dueDate : null, 
    setDueDate : (newDueDate : Dayjs | null) => set({ dueDate: newDueDate })
}));

