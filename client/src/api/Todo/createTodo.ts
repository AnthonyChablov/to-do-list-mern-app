import { Dayjs } from 'dayjs';
import { API_URL } from "../config";

export async function createTodo(
        
        title: String,
        description: String,
        startDate: Dayjs | null,
        dueDate: Dayjs | null
    )
    {
    const res = await fetch(`${API_URL}/todo`,{
        method: "POST",
        body: JSON.stringify({
            title, 
            description, 
            startDate, 
            dueDate
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
