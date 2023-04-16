import { useRouter } from 'next/router'
import Head
 from 'next/head'
export default function Home() {
    const router = useRouter()
    const { id } = router.query
  return (
    <>
    <h1>{id}</h1>
    </>
  )
}
