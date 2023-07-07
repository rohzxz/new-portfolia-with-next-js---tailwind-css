import React from "react";
import { socialLinks } from "../components/Data";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white p-10 fixed bottom-0 left-0 rounded-none w-full z-10 ml-auto mr-auto ">
      <div className="border-4 border-lime-500 ml-5  "></div>
      <div className="ml-5">
        <h4 className="">rohit ashva @2023</h4>
        {socialLinks.map(({ id, href, icon }) => {
          return (
            <Link key={id} className="text-3xl " href={href}>
              {icon}
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
