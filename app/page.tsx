import Link from "next/link";

export default function Home() {
    return (
        <main className="flex justify-between px-4 py-2">
            <h1>Hello Master Culu</h1>
            <Link className="px-4 py-1 bg-indigo-600 rounded-md hover:bg-indigo-700" href={"/sign-in"}>Sign In</Link>
        </main>
    );
}
