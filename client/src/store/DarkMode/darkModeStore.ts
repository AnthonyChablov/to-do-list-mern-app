import create from 'zustand';

type State = {
    darkMode: boolean,
}

type Action = {
    toggleDarkMode: Function,
    handleChangeDarkMode: Function 
}

export const useDarkModeStore = create<State & Action>((set)=>({
    darkMode: false,
    toggleDarkMode: (newDarkMode : boolean) => set({ darkMode : newDarkMode }),
    handleChangeDarkMode: (mode:boolean)=>{
        const root = window.document.documentElement;
        root.classList.remove(mode ? 'light' : 'dark');
        root.classList.add(mode ? 'dark' : 'light');
    }, 
}));