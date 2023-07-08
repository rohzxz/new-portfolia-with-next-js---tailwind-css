import React from "react";
import { socialLinks } from "../components/Data";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white  items-center p-1 pb-2 fixed bottom-0 left-0 right-0 rounded-none container mx-auto  ">
      <div className="border-4 border-lime-500 mx-auto  "></div>
      <div className=" flex justify-between mx-5 mt-1">
        <h4 className="lowercase">rohit ashva @2023</h4>
        <div>
          {socialLinks.map(({ id, href, icon }) => {
            return (
              <Link key={id} className="text-3xl " href={href}>
                {icon}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
