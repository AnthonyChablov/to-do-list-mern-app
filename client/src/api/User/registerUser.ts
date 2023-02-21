import {IUser} from '../../models/User';
import { API_URL } from '../config';

export interface IRegisterCredentials{
    firstName: string,
    lastName: string, 
    email: string, 
    password: string,
}

export async function registerUser(credentials: IRegisterCredentials):Promise<IUser>{
    const res = await fetch(`${API_URL}/user`, {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(credentials),
    });
    return res.json();
}