"use client";
import { SignIn } from "@clerk/clerk-react";
import Image from "next/image";

const SignInPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-black">
            <h1 className="flex-col text-center my-auto mb-9 max-w-[500px] leading-loose">
                &quot;One thing you gotta know about me is I have absolutely no
                filter. I have no problem saying what the hell I think of
                someone.&quot; - Kobe Bryant
            </h1>
            <div className="w-full max-w-xs">
                <Image
                    className="mx-auto mb-2"
                    src="/signinlogo.png"
                    alt="Only Fitness"
                    width="400"
                    height="200"
                />
                <main className="mt-6">
                    <SignIn
                        path="/sign-in"
                        routing="path"
                        signInUrl="/sign-in"
                    />
                </main>
            </div>
        </div>
    );
};

export default SignInPage;
