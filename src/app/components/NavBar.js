"use client"
import Link from "next/link";
import {signIn,signOut,useSession} from "next-auth/react";

function AuthButton(){
    const{data:session} = useSession();

    if(session){
        return (
            <>
            {session?.user?.name}
            <button onClick={()=>signOut()}>Sign Out</button>
            </>
        )
    }
    return (
        <>
        Not sign In
        <button onClick={()=>signIn()}>Sign In</button>
        </>
    )
}

export default function NavBar(){
    return (
    <div>
        <AuthButton />
    </div>
    )
}