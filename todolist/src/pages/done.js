
import Layout from './components/Layout'
import TodoList from './components/ListTodos'
import { useState,useEffect } from 'react'
import { useAuth } from '@clerk/nextjs';
import { getTodolist } from './components/editTodos';

export default function Done() {
  let [todoList, setTodoList] = useState([]);

  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const done = "true"

  useEffect(() =>{
    const update = async () => {
        const token = await getToken({ template: "codehooks" });
        const res = await getTodolist(token,done);
        console.log(res);
        setTodoList(res);
    }
    update()
  }, [])


  return (
    <>
    
      <main>
        <Layout />
        <TodoList todoList={todoList} setTodoList={setTodoList} done={done} />
      </main>
    </>
  )
}
