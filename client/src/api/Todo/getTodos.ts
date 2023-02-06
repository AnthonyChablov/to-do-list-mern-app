import { API_URL } from "../config";

export type TTodo = {
    title: String,
    description: String,
    startDate: Date,
    dueDate: Date,
    isDone: Boolean,
}

export async function getTodos(): Promise<TTodo[]>{
    const res = await fetch(`${API_URL}/decks`);
    return res.json();
}