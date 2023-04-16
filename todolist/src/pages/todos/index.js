import Head from 'next/head'
import { Inter } from 'next/font/google'
import Submit from '../components/Submit'
import Layout from '../components/Layout'
import TodoList from '../components/ListTodos'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function todo() {
  let [todoList, setTodoList] = useState([]);


  return (
    <>
    
      <main>
        <Layout />
        <Submit todoList={todoList} setTodoList={setTodoList}/>
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </main>
    </>
  )
}
