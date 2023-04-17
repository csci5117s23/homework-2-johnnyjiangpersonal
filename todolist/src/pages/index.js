import Head from 'next/head'
import { Inter } from 'next/font/google'

import { SignUp, SignedIn, SignOut, useAuth } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { isSignedIn } = useAuth();
  const {push} = useRouter();
  useEffect(() => {
    if(isSignedIn){
      push('/todos');
    }
  })


  return (
    <>
      <Head>
        <title>TodoApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to Johnny's todo list app</h1>
        <SignUp redirectUrl='/todos' signInUrl='/SignInPage'/>
      </main>
    </>
  )
}
