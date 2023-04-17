import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { useRouter } from "next/router";

export default function Layout(){
    const router = useRouter();
    return (

        <>
        <SignedIn>
            <div>
                <UserButton afterSignOutUrl="../"/>
            </div>

        </SignedIn>
        <SignedOut>

            <button onClick={() => router.push('./SignInPage')}>Sign In</button>
            
            <button onClick={() => router.push('./SignUpPage')}>Sign Up</button>
        </SignedOut>
        </>
        
    );
}