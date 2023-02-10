import { API_URL } from "../config";

export async function updateTodo(todoId:String, title: String, description: String, startDate: Date, dueDate: Date){
    const res = await fetch(`${API_URL}/todo/${todoId}`,{
        method: "PUT",
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