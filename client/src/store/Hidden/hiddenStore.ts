import create from 'zustand';

type State = {
    hidden: boolean,
}
type Action = {
    setHidden : Function,
}

export const useHiddenStore = create<State & Action>((set)=>({
    hidden: false,
    setHidden: (newHidden : boolean) => set({ hidden : newHidden }),
}));