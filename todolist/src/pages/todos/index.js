import Head from 'next/head'
import { Inter } from 'next/font/google'
import Submit from '../components/Submit'
import Layout from '../components/Layout'
import TodoList from '../components/ListTodos'
import { getTodolist } from '../components/editTodos'
import { useState,useEffect } from 'react'
import { useAuth } from '@clerk/nextjs'

export default function Todo() {
  let [todoList, setTodoList] = useState([]);
  
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  const done = "false"

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
        <Submit setTodoList={setTodoList} done={done} />
        <TodoList todoList={todoList} setTodoList={setTodoList} done={done} />
      </main>
    </>
  )
}
