import { API_URL, API_CROSS_ORIGIN } from "../config";

export async function deleteTodo(todoId: string) {
  await fetch(`${API_URL}/todo/${todoId}`, {
    method: "DELETE",
    credentials: 'include',
    headers: new Headers({
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':`${API_CROSS_ORIGIN}`,
        'Content-Type': 'application/json',
    })
  });
}