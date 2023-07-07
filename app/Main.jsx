import Image from "next/image";
import React from "react";
import photo from "../public/myphot.jpg";

const Main = () => {
  return (
    <div className="container mr-auto ml-auto  mt-40 leading-relaxed   ">
      <div className=" ml-10 mr-5 ">
        <p className="text-xl text-zinc-700">Hi, my name is </p>
        <h2> Rohit Ashva. </h2>
        <h1 className="my-5 text-lime-500">Full stack developer</h1>
        <p className="text-lg mb-60">
          hello My name is Rohit ashva.I did my computer software bachelors
          degree in 2017 from india. after then did another course in management
          from Singapore in 2021. right now I have lived in Poland last two
          years. right now I am learning core javascript and full stack
          development path. I love learning new concepts and skills. and I m
          fascinated by how things work behind the computer screen.
        </p>
        {/* <Image
            className="rounded-full w-40 border-4 border-black"
            src={photo}
            alt="photo"
          /> */}
      </div>
    </div>
  );
};

export default Main;
