import { API_URL, API_CROSS_ORIGIN } from "../config";
import { TTodo } from "./getTodos";

export async function getTodo(todoId: string) : Promise<TTodo> {
    const res = await fetch(`${API_URL}/decks/${todoId}`, {
        credentials: 'include',
        headers: new Headers({
            'Accept': 'application/json',
            'Access-Control-Allow-Origin':`${API_CROSS_ORIGIN}`,
            'Content-Type': 'application/json',
        })
    });
    return res.json();
}