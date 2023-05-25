"use client";
import { useState } from "react";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {};

    return (
        <div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}></form>
        </div>
    );
};

export default SignIn;
