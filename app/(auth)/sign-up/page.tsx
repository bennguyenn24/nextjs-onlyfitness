"use client";
import Image from "next/image";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="flex-col text-center mt-10 mb-10 leading-loose">
                "Sports are such a great teacher. I think of everything they've
                taught me: camaraderie, humility, how to resolve differences." -
                Kobe Bryant
            </h1>
            <div className="w-full max-w-xs">
                <Image
                    className="mx-auto mb-3"
                    src="/signinlogo.png"
                    alt="Only Fitness"
                    width="500"
                    height="200"
                />
                <main className="mt-6">
                    <SignUp
                        path="/sign-up"
                        routing="path"
                        signInUrl="/sign-in"
                    />
                </main>
            </div>
        </div>
    );
}

// export default SignUp;
