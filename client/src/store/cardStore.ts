import create from 'zustand';

interface ICard{
    cardId: String,
    setCardId: Function

};

export const useCardStore = create<ICard>((set)=>({
    cardId:'',
    setCardId: (newCardId : String) => set({ cardId : newCardId }),

}));