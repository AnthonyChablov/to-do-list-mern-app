import create from 'zustand';
import { Dayjs } from 'dayjs';

type State = {
    title: String | string,
    description: String | string,
    isCompleted : Boolean,
    startDate : Dayjs | null,
    dueDate : Dayjs | null, 
}
  
type Action = {
    setTitle : (newTitle : String) => void,
    setDescription : (newDescription : String)=>void,
    setStartDate : (newStartDate : Dayjs | null)=> void,
    setDueDate : (newEndDate : Dayjs | null) => void
}

export const useTodoStore = create<State & Action>((set)=>({
    title: '',
    description: '',
    isCompleted: false,
    startDate : null,
    dueDate : null, 
    setTitle : (newTitle : String) => set({ title: newTitle }),
    setDescription : (newDescription : String) => set({ description: newDescription }),
    setStartDate : (newStartDate : Dayjs | null)=> set({ startDate: newStartDate }),
    setDueDate : (newDueDate : Dayjs | null) => set({ dueDate: newDueDate })
}));

