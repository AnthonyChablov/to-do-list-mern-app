import { API_URL } from "../config";

export async function deleteTodo(todoId: string) {
  await fetch(`${API_URL}/decks/${todoId}`, {
    method: "DELETE",
  });
}