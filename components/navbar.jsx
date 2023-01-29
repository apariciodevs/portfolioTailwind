import Link from "next/link";

import { useState } from "react";

import {BsFillMoonStarsFill} from "react-icons/bs"

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    return ( <>
    <nav className="flex justify-between px-6 py-6 mb-12 dark:bg-black">
        <h1 className="text-xl tracking-tight">Developedbyfacu</h1>
        <div className="flex items-center">
        <Link href={'./'}>
        <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="text-xl cursor-pointer"/>
        </Link>
        <Link className="px-4 py-2 ml-8 text-white rounded-lg bg-gradient-to-r from-sky-500 to-teal-400" href={'./'}>Resume</Link>
        </div>
    </nav>
    </> );
}
 
export default Navbar;