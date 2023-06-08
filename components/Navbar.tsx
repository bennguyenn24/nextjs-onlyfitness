import Link from 'next/link';
import LogOutBtn from "./LogOutBtn";
import { currentUser } from '@clerk/nextjs';

const Navbar = () => {
    return (
      <nav>
        <ul className="flex items-center justify-between bg-gray-900 max-w-7xl sm:px-8 lg:px-8 h-16 ">
          <li>
            <Link href="/">Home</Link>
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
          <li>
            <LogOutBtn />
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;

