import create from 'zustand';

import { getLoggedInUser } from '../../api/User/getLoggedInUser';
import { IUser } from '../../models/User';


type State = {
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword: String,
    loggedInUser: IUser | undefined
}
  
type Action = {
    setFirstName : (newFirstName : String) => void,
    setLastName : (newLastName : String) => void,
    setEmail : (newEmail : String)=>void,
    setPassword : (newPassword : String)=> void,
    setConfirmPassword: (newConfirmPassword : String)=> void,
    fetchLoggedInUser: Function,
    setLoggedInUser: (newLoggedInUser : IUser)=> void
}

export const useUserStore = create<State & Action>((set)=>({
    firstName: '',
    lastName:'',
    email: '',
    password: '',
    confirmPassword:'',
    loggedInUser: undefined,
    setFirstName : (newFirstName : String) => set({ firstName: newFirstName }),
    setLastName : (newLastName : String) => set({ lastName: newLastName }),
    setEmail: (newEmail : String) => set({ email: newEmail }),
    setPassword : (newPassword : String) => set({ password: newPassword }),
    setConfirmPassword : (newConfirmPassword : String) => set({ confirmPassword: newConfirmPassword }),
    fetchLoggedInUser : async () => {
        const fetchedUser = await getLoggedInUser();
        set({loggedInUser: fetchedUser});
    },
    setLoggedInUser: (newLoggedInUser : any) => set({ loggedInUser: newLoggedInUser }),
}));
