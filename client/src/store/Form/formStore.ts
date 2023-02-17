import create from 'zustand';

type State = {
    mode: String,
}

type Action = {
    setMode: Function
}

export const useFormStore = create<State & Action>((set)=>({
    mode:'',
    setMode: (newMode : String) => set({ mode : newMode }),
}));