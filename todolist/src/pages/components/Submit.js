import { useState,useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

import { getTodolist, addTodos } from "./editTodos";
import TodoElement from "./TodoElement";

export default function Submit({setTodoList, done}){
    let [task, setTask] = useState("");
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    return (
        
        <>
            <form onSubmit={async (e) =>{
                    e.preventDefault();
                    const token = await getToken({ template: "codehooks" });

                    await addTodos(token, userId, task);
                    const res = await getTodolist(token,done);
                    setTodoList(res);
                    setTask("");
                }
                }>
                <label htmlFor="todo">Add to do item</label>
                <input type="text" onChange={(e) => setTask(e.target.value)} value={task} />
                <input type="submit" />
            </form>
            
        </>
    );
}