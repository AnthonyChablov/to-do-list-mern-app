import { API_URL } from "../config";
import { TTodo } from "./getTodos";

export async function getTodo(todoId: string) : Promise<TTodo> {
    const res = await fetch(`${API_URL}/decks/${todoId}`, {
        credentials: 'include',
        headers: new Headers({
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':`${URL}`,
            'Content-Type': 'application/json',
        })
    });
    return res.json();
}