import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="container  flex justify-around items-center p-4 border-4 border-black ml-auto mr-auto rounded-lg fixed top-0 left-0 right-0 z-10 bg-white ">
      <b className="text-2xl font-mono ">rohit ashva</b>
      <ul className="flex items-center gap-4 text-lg  ">
        <li>
          <Link href="#Main">About</Link>
        </li>
        <li>
          <Link href="#Skills">Skills</Link>
        </li>
        <li>
          <Link href="#">Demo</Link>
        </li>
        <li>
          <Link href="#">Demo</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
