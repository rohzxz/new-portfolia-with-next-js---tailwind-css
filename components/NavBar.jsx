import Link from "next/link";
import React from "react";
import { links } from "../components/Data";

const NavBar = () => {
  return (
    <div className="container  flex justify-around items-center p-4 border-4 border-black ml-auto mr-auto rounded-lg fixed top-0 left-0 right-0 z-10 bg-white ">
      <b className="text-2xl font-mono ">
        <Link href="/main">rohit ashva</Link>{" "}
      </b>

      <ul className="flex items-center gap-4 text-lg  ">
        {links.map(({ id, url, text }) => {
          return (
            <>
              {" "}
              <li key={id}>
                <Link href={url}>{text}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
