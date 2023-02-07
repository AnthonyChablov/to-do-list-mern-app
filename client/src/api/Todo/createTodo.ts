
import { API_URL } from "../config";

export async function createTodo(
        title: String,
        description: String,
        startDate: Date,
        dueDate: Date,
    )
    {
    const res = await fetch(`${API_URL}/decks`,{
        method: "POST",
        body: JSON.stringify({
            title, 
            description, 
            startDate, 
            dueDate, 

        }),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    return res.json();

}
