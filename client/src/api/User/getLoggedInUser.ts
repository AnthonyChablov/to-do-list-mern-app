import {IUser} from '../../models/User';
import { API_URL } from '../config';

export async function getLoggedInUser():Promise<IUser>{
    const res = await fetch(`${API_URL}/user`, {method:'GET'});
    return res.json();
}