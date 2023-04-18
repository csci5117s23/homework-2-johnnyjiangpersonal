import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function Custom404() {
    const router = useRouter();
    return <>
    <SignedIn>
        <h1>This page doesn't exist</h1>

        <button onClick={() => router.push('./todos')}>Go back to todo list</button>
    </SignedIn>
    <SignedOut>
        <h1>This page doesn't exist</h1>
        <h2>You are not logged in</h2>
        <button onClick={() => router.push('./')}>homepage</button>
    </SignedOut>
    </>
}