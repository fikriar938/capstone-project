"use client"

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";


const UserLinks = () => {
    const { status } = useSession();
    return(
        <>
            {status === "authenticated" ? (
                <div>
                <Link href="/orders">Orders</Link>
                    <span className="ml-4 cursor-pointer" onClick={()=> signOut()}>Logout</span>
                </div>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </>
    );
};

export default UserLinks;