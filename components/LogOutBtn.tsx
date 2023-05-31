"use client";
import { useClerk } from "@clerk/clerk-react";

export default function LogOutBtn() {
    const { signOut } = useClerk();
    return <button onClick={() => signOut()}>Sign out</button>;
}
