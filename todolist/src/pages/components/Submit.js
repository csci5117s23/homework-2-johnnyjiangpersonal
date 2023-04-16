import { useState,useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

import { getTodolist, addTodos } from "./editTodos";
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Submit(){
    let [task, setTask] = useState("");
    let [todoList, setTodoList] = useState([]);
    const { isLoaded, userId, sessionId, getToken } = useAuth();

  
    useEffect(() =>{
        const update = async () => {
            const token = await getToken({ template: "codehooks" });
            const res = await getTodolist(token);
            console.log(res);
            setTodoList(res);
        }
        update()
    }, [])

    const router = useRouter();
    return (
        
        <>
            <form onSubmit={async (e) =>{
                    e.preventDefault();
                    const token = await getToken({ template: "codehooks" });

                    await addTodos(token, userId, task);
                    setTodoList(await getTodolist(token));
                    setTask("");
                }
                }>
                <label htmlFor="todo">Add to do item</label>
                <input type="text" onChange={(e) => setTask(e.target.value)} value={task} />
                <input type="submit" />
            </form>
            
            <hr />
            {todoList.map((todo) => { return(
                
                <>
                
                    <input type="checkbox" />
                    <Link href={`../todos/${todo._id}`} >
                        {todo.todo}
                    </Link>
                    <br />
                    <hr />
                </>
            );
            })}
        </>
    );
}