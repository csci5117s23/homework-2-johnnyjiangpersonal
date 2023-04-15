import { useRouter } from 'next/router'
import Head
 from 'next/head'
export default function Home() {
    const router = useRouter()
    const { id } = router.query
  return (
    <>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
        
    <h1>{id}</h1>
    </>
  )
}