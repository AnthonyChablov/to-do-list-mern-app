import create from 'zustand';

type State = {
    isOpen : boolean,
}

type Action = {
    setIsOpen: Function
}

export const useDrawerStore = create<State & Action>((set)=>({
    isOpen : true , 
    setIsOpen : (newIsOpen : boolean) => set({ isOpen : newIsOpen }),
}));