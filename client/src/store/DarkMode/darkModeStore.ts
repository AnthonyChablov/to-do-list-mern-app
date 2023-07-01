import create from 'zustand';

type State = {
    theme: string
}

type Action = {
    setTheme: Function
}

export const useDarkModeStore = create<State & Action>((set)=>({
    theme: 'light',
    setTheme: ( newTheme : string ) => set({ theme : newTheme }),
}));