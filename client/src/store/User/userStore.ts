import create from 'zustand';

type State = {
    name: String,
    email: String,
    password: String,
}
  
type Action = {
    setName : (newName : String) => void,
    setEmail : (newEmail : String)=>void,
    setPassword : (newPassword : String)=> void,
}

export const useUserStore = create<State & Action>((set)=>({
    name: '',
    email: '',
    password: '',
    setName : (newName : String) => set({ name: newName }),
    setEmail: (newEmail : String) => set({ email: newEmail }),
    setPassword : (newName : String) => set({ name: newName }),
}));
