import Link from "next/link"
import { getTodolist, markTodolist } from "./editTodos"
import { useAuth } from "@clerk/nextjs";

export default function TodoElement({todo, setTodoList} ){

    const { isLoaded, userId, sessionId, getToken } = useAuth();
    return (
        <>
            <input type="checkbox" onChange={async () => {
                console.log("change");
                const token = await getToken({ template: "codehooks" });
                await markTodolist(token, !todo.isDone, todo._id)
                setTodoList(await getTodolist(token, "false"))}} 
                defaultChecked={todo.isDone}
                />
            <Link href={`../todos/${todo._id}`} >
                {todo.todo}
            </Link>
            <br />
            <hr />
        
        </>

    )
}