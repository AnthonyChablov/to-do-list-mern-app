import create from 'zustand';

interface IModal{

    open: boolean,
    handleModalOpen:Function ,

    openAddTaskModal: boolean,
    handleOpenAddTaskModal:Function ,

    openEditTaskModal: boolean,
    handleOpenEditTaskModal:Function 
};

export const useModalStore = create<IModal>((set)=>({
    open: false,
    handleModalOpen: (newOpen : boolean) => set({ open : newOpen }),

    openAddTaskModal: false,
    handleOpenAddTaskModal: (newOpen : boolean) => set({ openAddTaskModal : newOpen }),

    openEditTaskModal: false,
    handleOpenEditTaskModal:(newOpen : boolean) => set({ openEditTaskModal : newOpen }),
}));