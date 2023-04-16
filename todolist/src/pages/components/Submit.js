import { useState,useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

import { getTodolist, addTodos } from "./editTodos";
import TodoElement from "./TodoElement";

export default function Submit({todoList, setTodoList}){
    let [task, setTask] = useState("");
    const { isLoaded, userId, sessionId, getToken } = useAuth();

  
    useEffect(() =>{
        const update = async () => {
            const token = await getToken({ template: "codehooks" });
            const res = await getTodolist(token,"false");
            console.log(res);
            setTodoList(res);
        }
        update()
    }, [])

    return (
        
        <>
            <form onSubmit={async (e) =>{
                    e.preventDefault();
                    const token = await getToken({ template: "codehooks" });

                    await addTodos(token, userId, task);
                    const res = await getTodolist(token,"false");
                    setTodoList(res);
                    setTask("");
                }
                }>
                <label htmlFor="todo">Add to do item</label>
                <input type="text" onChange={(e) => setTask(e.target.value)} value={task} />
                <input type="submit" />
            </form>
            
            <hr />
            {todoList.map((todo) => { return(
                
                
                    <TodoElement key={todo._id} todo={todo} setTodoList={setTodoList} />

            );
            })}
        </>
    );
}