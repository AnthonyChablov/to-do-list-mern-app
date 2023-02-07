import { API_URL } from "../config";

export type TTodo = {
    _id: string;
    title: String,
    description: String,
    startDate: Date,
    dueDate: Date,
}

export async function getTodos(): Promise<TTodo[]>{
    const res = await fetch(`${API_URL}/todo`);
    return res.json();
}