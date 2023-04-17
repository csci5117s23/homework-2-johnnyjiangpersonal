import { useRouter } from 'next/router'
import { useAuth } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { getTodoitem, updateTodo } from '../components/editTodos';

export default function ChangeTodos() {
  
  const [task, setTask] = useState("");
  const router = useRouter();
  const { isLoaded, userId, sessionId, getToken } = useAuth();


  const { id } = router.query
  
  
  useEffect(() =>{
    const update = async () => {
      if(userId != null){
        console.log(userId);
        const token = await getToken({ template: "codehooks" });
        const res = await getTodoitem(token,userId,id);
        console.log(res[0].todo);
        
        setTask(res[0].todo);
      }
       
    }
    update().catch(console.error);
  }, [userId])
    
  return (
    <>
      <textarea rows="5" cols="50" onChange={(e) => setTask(e.target.value)} defaultValue={task} />
      <button onClick={ async () => {
        const token = await getToken({ template: "codehooks" });
        await updateTodo(token,userId,id,task);
      }}>Make Change</button>
    </>
  )
}
