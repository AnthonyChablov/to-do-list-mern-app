import { API_URL } from "../config";
import { Dayjs } from 'dayjs';
export async function updateIsCompleted(todoId:String, title: String, description: String,isCompleted:Boolean, startDate: Dayjs | null, dueDate: Dayjs | null ){
    const res = await fetch(`${API_URL}/todo/${todoId}`,{
        method: "PUT",
        body: JSON.stringify({
            title, 
            description, 
            isCompleted,
            startDate, 
            dueDate, 
        }),
        credentials: 'include',
        headers: new Headers({
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'http://localhost:8000/',
            'Content-Type': 'application/json',
        })
    });
    return res.json();
}