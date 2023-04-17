import Link from "next/link"
import { getTodolist, markTodolist } from "../modules/editTodos"
import { useAuth } from "@clerk/nextjs";

export default function TodoElement({todo, setTodoList, done} ){

    const { isLoaded, userId, sessionId, getToken } = useAuth();
    let task = "Loading...";
    if(todo.todo.length > 50){
        task = todo.todo.substring(0,50) + "...";
    }else{
        task = todo.todo;
    }
    return (
        <>
            <input type="checkbox" onChange={async () => {
                const token = await getToken({ template: "codehooks" });
                await markTodolist(token, !todo.isDone, todo._id);
                setTodoList(await getTodolist(token, userId, done));
            }} 
                defaultChecked={todo.isDone}
                />
            <Link href={`../todos/${todo._id}`} >
                {task}
            </Link>
            <br />
            <hr />
        
        </>

    )
}