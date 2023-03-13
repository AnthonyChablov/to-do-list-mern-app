import {IUser} from '../../models/User';
import { API_URL } from '../config';

export interface IRegisterCredentials{
    firstName: String,
    lastName: String, 
    email: String, 
    password: String,
}

export async function registerUser(credentials: IRegisterCredentials){
    await fetch(`${API_URL}/user/register`, {
        method: "POST",
        headers: new Headers({
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':`${API_URL}`,
            'Content-Type': 'application/json',
        }),
        body: JSON.stringify(credentials),
        credentials: 'include'
    }).then((res) => {
        console.log(res.status); 

        if (!res.ok) {
            throw new Error("HTTP status " + res.status);
        }

        return res.json();
    });

}