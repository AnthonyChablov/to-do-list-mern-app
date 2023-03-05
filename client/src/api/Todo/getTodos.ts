import { API_URL } from "../config";

export type TTodo = {
    _id: string;
    title: String,
    description: String,
    isCompleted:Boolean,
    startDate: Date,
    dueDate: Date,
}

export async function getTodos(): Promise<TTodo[]>{
    const res = await fetch(`${API_URL}/todo`, {
        credentials: 'include',
        headers: new Headers({
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':'http://localhost:8000/',
            'Content-Type': 'application/json',
        })
    });
    return res.json();
}