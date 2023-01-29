import Navbar from "./navbar";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { useState } from "react";
import Link from "next/link";

const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <nav className="flex justify-between px-6 py-6 mb-12 ">
        <h1 className="text-xl tracking-tight md:text-2xl">Developedbyfacu</h1>
        <div className="flex items-center">
          <Link href={"./"}>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl cursor-pointer"
            />
          </Link>
          <Link
            className="px-4 py-2 ml-8 text-white rounded-lg bg-gradient-to-r from-sky-500 to-teal-400"
            href={"./"}
          >
            Resume
          </Link>
        </div>
      </nav>{" "}
      {children}
    </div>
  );
};

export default Layout;

