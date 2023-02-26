import {IUser} from '../../models/User';
import { API_URL } from '../config';

export interface ILoginCredentials{
    email:String,
    password:String
}

export async function loginUser(credentials: ILoginCredentials){
    await fetch(`${API_URL}/user/login`, {
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(credentials),
    }).then((res) => {
        console.log(res.status); 

        if (!res.ok) {
            throw new Error("HTTP status " + res.status);
        }

        return res.json();
    });
    
}