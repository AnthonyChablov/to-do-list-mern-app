import create from 'zustand';

interface IForm{
    mode: String,
    setMode: Function
};

export const useFormStore = create<IForm>((set)=>({
    mode:'',
    setMode: (newMode : String) => set({ mode : newMode }),
}));