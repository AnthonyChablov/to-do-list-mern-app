import { API_URL } from '../config';

export async function logoutUser(){
    await fetch(`${API_URL}/user/logout`, {
        method:'POST',
        credentials: 'include',
    });
    
}