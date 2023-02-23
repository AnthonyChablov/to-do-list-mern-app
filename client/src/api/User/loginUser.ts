import {IUser} from '../../models/User';
import { API_URL } from '../config';

export interface ILoginCredentials{
    email:String,
    password:String
}

export async function loginUser(credentials: ILoginCredentials):Promise<IUser>{
    const res = await fetch(`${API_URL}/user/login`, {
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(credentials),
    });
    return res.json();
}