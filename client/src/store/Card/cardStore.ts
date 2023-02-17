import create from 'zustand';

type State = {
    cardId: String,
}

type Action = {
    setCardId: Function
}

export const useCardStore = create<State & Action>((set)=>({
    cardId:'',
    setCardId: (newCardId : String) => set({ cardId : newCardId }),
}));