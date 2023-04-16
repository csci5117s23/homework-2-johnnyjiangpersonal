
import TodoElement from "./TodoElement";

export default function TodoList({todoList, setTodoList, done}){
    return (
        
        <>

            <hr />
            {todoList.map((todo) => { return(
                
                
                    <TodoElement key={todo._id} todo={todo} setTodoList={setTodoList} done={done}/>

            );
            })}
        </>
    );
}