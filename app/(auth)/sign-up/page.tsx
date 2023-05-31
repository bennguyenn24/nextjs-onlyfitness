"use client";
import { useState } from "react";
import Image from "next/image";
import { SignUp } from "@clerk/nextjs";
// import Image from '../public/logo.png';

// const SignUp = () => {
//   const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         console.log("hello world");
//         e.preventDefault();
//         setEmail("");
//         setPassword("");
//     };
export default function Page() {
    return (
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    )}
    //   <div className="flex flex-col justify-center items-center min-h-screen bg-black">
    //   <h1 className="flex-col text-center my-auto mb-9 max-w-[500px] leading-loose">
    //             "Sports are such a great teacher. I think of everything they've
    //             taught me: camaraderie, humility, how to resolve differences." -
    //             Kobe Bryant
    //         </h1>
    //             <div className="w-full max-w-xs">
    //                 <Image
    //                     className="mx-auto mb-2"
    //                     src="/signinlogo.png"
    //                     alt="Only Fitness"
    //                     width="400"
    //                     height="200"
    //                 />
    //                 <form
    //                     className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    //                     onSubmit={handleSubmit}
    //                 >
    //                     <h2 className="text-2xl text-center mb-6 text-gray-700">
    //                         Sign up
    //                     </h2>
    //                     <div className="mb-4">
    //                     <label
    //                             className="block text-gray-700 text-sm font-bold mb-2"
    //                             htmlFor="name"
    //                         >
    //                             Name
    //                         </label>
    //                         <input className=" mb-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
    //                         type="text"
    //                         id="name"
    //                         placeholder="Name"
    //                         value={name}
    //                         onChange={(e) => setName(e.target.value)}
    //                         />
    //                         <label
    //                             className="block text-gray-700 text-sm font-bold mb-2"
    //                             htmlFor="email"
    //                         >
    //                             Email
    //                         </label>
    //                         <input
    //                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                             id="email"
    //                             type="email"
    //                             placeholder="Email"
    //                             value={email}
    //                             onChange={(e) => setEmail(e.target.value)}
    //                         />
    //                     </div>
    //                     <div className="mb-6">
    //                         <label
    //                             className="block text-gray-700 text-sm font-bold mb-2"
    //                             htmlFor="password"
    //                         >
    //                             Password
    //                         </label>
    //                         <input
    //                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                             id="password"
    //                             type="password"
    //                             placeholder="Password"
    //                             value={password}
    //                             onChange={(e) => setPassword(e.target.value)}
    //                         />
    //                     </div>
    //                     <div className="flex items-center justify-between">
    //                         <button
    //                             className="bg-yellow-900 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //                             type="submit"
    //                         >
    //                             Sign up
    //                         </button>
                    //     </div>
                    // </form>
            //     </div>
            // </div>
    //  )
//  }

// export default SignUp;
