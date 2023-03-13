import { API_URL } from '../config';

export async function logoutUser(){
    await fetch(`${API_URL}/user/logout`, {
        method:'POST',
        credentials: 'include',
        headers: new Headers({
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':`${URL}`,
            'Content-Type': 'application/json',
        })
    });
}