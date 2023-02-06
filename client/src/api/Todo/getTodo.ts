import { API_URL } from "../config";
import { TTodo } from "./getTodos";


export async function getDeck(todoId: string) : Promise<TTodo> {
    const res = await fetch(`${API_URL}/decks/${todoId}`);
    return res.json();
}