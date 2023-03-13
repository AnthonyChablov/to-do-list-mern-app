import { API_URL } from "../config";

export async function deleteTodo(todoId: string) {
  await fetch(`${API_URL}/todo/${todoId}`, {
    method: "DELETE",
    credentials: 'include',
    headers: new Headers({
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'http://localhost:8000/',
        'Content-Type': 'application/json',
    })
  });
}