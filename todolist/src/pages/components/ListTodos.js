import { useState,useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

import { getTodolist, addTodos } from "./editTodos";
import TodoElement from "./TodoElement";

export default function TodoList({todoList, setTodoList}){
    return (
        
        <>

            <hr />
            {todoList.map((todo) => { return(
                
                
                    <TodoElement key={todo._id} todo={todo} setTodoList={setTodoList} />

            );
            })}
        </>
    );
}