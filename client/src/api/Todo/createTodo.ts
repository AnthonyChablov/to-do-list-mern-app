
import { API_URL } from "../config";

export async function createTodo(
        title: String,
        description: String,
        startDate: Date,
        dueDate: Date,
        isDone:Boolean
    )
    {
    const res = await fetch(`${API_URL}/decks`,{
        method: "POST",
        body: JSON.stringify({
            title, 
            description, 
            startDate, 
            dueDate, 
            isDone
        }),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    return res.json();

}
