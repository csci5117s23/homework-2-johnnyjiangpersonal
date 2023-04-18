
import Layout from '../components/Layout'
import TodoList from '../components/ListTodos'
import { useState,useEffect } from 'react'
import { useAuth } from '@clerk/nextjs';
import { getTodolist } from '../modules/editTodos';
import { useRouter } from 'next/router';

export default function Done() {
  let [todoList, setTodoList] = useState([]);

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const router = useRouter();
  
  const { isSignedIn } = useAuth();
  const {push} = useRouter();

  const done = "true"

  
  useEffect(() =>{
    if(!isSignedIn){
      push('/todos');
    }

    const update = async () => {
      if(userId != null){
        console.log(userId);
        const token = await getToken({ template: "codehooks" });
        const res = await getTodolist(token,userId,done);
        console.log(res);
        
        setTodoList(res);
      }
       
    }
    update().catch(console.error);
  }, [userId])
    
  return (
    <>
    
      <main>
        <Layout />
        <button onClick={() => router.push('./todos')}>Tasks to do</button>
        <TodoList todoList={todoList} setTodoList={setTodoList} done={done}/>
      </main>
    </>
  )
}
