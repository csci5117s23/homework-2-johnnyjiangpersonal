import { useState,useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

import { getTodolist, addTodos } from "./editTodos";

export default function Submit(){
    let [task, setTask] = useState("");
    let [todoList, setTodoList] = useState([]);
    const { isLoaded, userId, sessionId, getToken } = useAuth();

  
    useEffect(() =>{
        const update = async () => {
            const token = await getToken({ template: "codehooks" });
            const res = getTodolist(token);
            console.log(res);
            setTodoList(res);
        }
        update()
    }, [])


    return (
        
        <>
            <form>
                <label htmlFor="todo">Add to do item</label>
                <input type="text" onChange={(e) => setTask(e.target.value)} value={task} />
                <input onClick={() => {setTask("")}} type="submit" />
            </form>
            
            <p>end</p>
        </>
    );
}