"use client";
import Link from "next/link";
import LogOutBtn from "./LogOutBtn";
import { useUser } from "@clerk/nextjs";

const Navbar = () => {
    const { user } = useUser();

    return (
        <nav>
            {/* <header>
                <Link
                    className="hover:underline font-medium flex gap-2 items-center"
                    href="/"
                >
                    <h1 className="text-3xl font-bold">OnlyFitness</h1>
                </Link> */}
            {/* </header> */}
            <ul className="flex items-center justify-between bg-gray-900 max-w-7xl sm:px-8 lg:px-8 h-16 ">
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="/trainers">Find Trainers</Link>
                </li>
                <li>
                    <Link href="/profile">Profile</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                {          user ? (
                <li><LogOutBtn />
                    </li>) : ""}
            </ul>
            {user ? (
                <div>Hello {user.firstName}</div>
            ) : (
                <div>Not signed in</div>
            )}
        </nav>
    );
};

export default Navbar;
