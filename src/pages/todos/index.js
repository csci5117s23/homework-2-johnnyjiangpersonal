import Submit from '../components/Submit'
import Layout from '../components/Layout'
import TodoList from '../components/ListTodos'
import { getTodolist, setTodoList } from '../components/editTodos'
import { useState,useEffect } from 'react'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/router'

export default function Todo() {
  
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const router = useRouter();
  const { isSignedIn } = useAuth();
  const {push} = useRouter();

  let [todoList, setTodoList] = useState([]);
  

  const done = "false"

  useEffect(() =>{
    if(!isSignedIn){
      push("../");
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
          <button onClick={() => router.push('./done')}>Done Tasks</button>
          <Submit setTodoList={setTodoList} done={done} />
          <TodoList todoList={todoList} setTodoList={setTodoList} done={done}/>
        </main>
      </>
    )

}
