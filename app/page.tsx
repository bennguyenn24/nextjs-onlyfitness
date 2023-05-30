import Link from "next/link";

export default function Home() {
    return (
        <main className="flex justify-between px-4 py-2">
            <div text-black-500>
                <h1>ONLYFITNESS</h1>
                <h2>
                    "I can't relate to lazy people. We don't speak the same
                    language. I don't understand you. I don't want to understand
                    you." - <br />  Kobe Bryant
                </h2>
            </div>
            <Link
                className="px-4 py-2 bg-yellow-900 rounded-md hover:bg-yellow-600"
                href={"/sign-in"}
            >
                Sign In
            </Link>
            <Link
                className="px-4 py-2 bg-yellow-900 rounded-md hover:bg-yellow-600"
                href={"/sign-up"}
            >
                Sign Up
            </Link>
        </main>
    );
}
