import { API_URL } from "../config";
import { Dayjs } from 'dayjs';
export async function updateTodo(todoId:String, title: String, description: String, startDate: Dayjs | null, dueDate: Dayjs | null){
    const res = await fetch(`${API_URL}/todo/${todoId}`,{
        method: "PUT",
        body: JSON.stringify({
            title, 
            description, 
            startDate, 
            dueDate, 
        }),
        credentials: 'include',
        headers: new Headers({
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'https://todoify.onrender.com',
            'Content-Type': 'application/json',
        })
    });
    return res.json();
}