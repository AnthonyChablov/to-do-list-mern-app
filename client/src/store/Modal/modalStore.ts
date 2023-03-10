import create from 'zustand';


type State = {
    open: boolean,
}
type Action = {
    handleModalOpen : Function,
}

export const useModalStore = create<State & Action>((set)=>({
    open: false,
    handleModalOpen: (newOpen : boolean) => set({ open : newOpen }),
}));