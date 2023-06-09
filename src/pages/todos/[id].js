import { useRouter } from 'next/router'
import { useAuth } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import { getTodoitem, updateTodo, markTodolist } from '../../modules/editTodos';

export default function ChangeTodos() {
  
  const [task, setTask] = useState({});
  const [done, setDone] = useState("Loading");
  const [change, setChange] = useState("Loading");
  const router = useRouter();
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isSignedIn } = useAuth();
  const {push} = useRouter();


  const { id } = router.query
  
  
  useEffect(() =>{
   
    const update = async () => {
      if(userId != null){
        console.log(userId);
        const token = await getToken({ template: "codehooks" });
        const res = await getTodoitem(token,userId,id);
        
        setTask(res[0]);
        setChange("Make Change");
        
        
        if(res[0].isDone){
          setDone("Mark Undone");
          console.log(done);
        }else{
          setDone("Mark done");
          console.log(done);
        }
        console.log(done);
      }
       
    }
    update().catch(console.error);
     
    if(!isSignedIn){
      push('../404');
    }
  }, [userId])
    
  return (
    <>
    
      {console.log(done)}
      <textarea rows="5" cols="50" onChange={(e) => setTask(e.target.value)} defaultValue={task.todo} />
      <button onClick={ async () => {
        
        const token = await getToken({ template: "codehooks" });
        setChange("Loading");
        await updateTodo(token,userId,id,task);
        setChange("Make Change");
      }}>{change}</button>
      <button onClick={ async () => {
        {console.log(done)}
        const token = await getToken({ template: "codehooks" });
        await markTodolist(token, (done == "Mark done"), task._id);
        if(done == "Mark Undone"){
          setDone("Mark Done");
        }else{
          setDone("Mark Undone");
        }
      }}>
        {done}
      </button>
    </>
  )
}
