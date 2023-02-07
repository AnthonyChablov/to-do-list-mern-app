import create from 'zustand';

interface IModal{
    open: boolean,
    handleModalOpen:Function ,
};

export const useModalStore = create<IModal>((set)=>({
    open: false,
    handleModalOpen: (newOpen : boolean) => set({ open : newOpen })
}));