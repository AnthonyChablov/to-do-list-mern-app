import {IUser} from '../../models/User';
import { API_URL } from '../config';

export async function getLoggedInUser():Promise<IUser>{
    const res = await fetch(`${API_URL}/user`,{
        credentials: 'include',
        headers: new Headers({
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'https://todoify-api.onrender.com/',
            'Content-Type': 'application/json',
        })
    });
    return res.json();
}