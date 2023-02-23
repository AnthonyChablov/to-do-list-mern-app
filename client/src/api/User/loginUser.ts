import {IUser} from '../../models/User';
import { API_URL } from '../config';

export interface ILoginCredentials{
    email:String,
    password:String
}

export async function loginUser(email:String, password:String):Promise<IUser>{
    const res = await fetch(`${API_URL}/user/login`, {
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify({email, password}),
    });
    return res.json();
}