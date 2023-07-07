import React from "react";

const Skills = () => {
  return (
    <section className="container mt-32 mx-auto  items-center ">
      <h4 className="ml-5">
        Here are a few technologies I’ve been working with recently :-
      </h4>
      <div className="flex justify-around mt-10 mx-2">
        <div>
          <h3 className="text-xl bg-lime-500 "> frontend </h3>
          <ol className="leading-loose text-xl list-disc ">
            <li> React js</li>
            <li>java Script(ES6+)</li>
            <li>Next js</li>
            <li> Tailwind css</li>
            <li>git </li>
            <li>GitHub</li>
            <li>Style Components</li>
          </ol>
        </div>
        <div className=" bg-lime-500 w-1 border bottom-10 border-lime-500"></div>
        <div>
          <h3 className="text-xl bg-lime-500  "> backend </h3>
          <ol className="leading-loose text-xl list-disc ">
            <li> java </li>
            <li>java Script(ES6+)</li>
            <li>Next js</li>
            <li> Tailwind css</li>
            <li>git </li>
            <li>GitHub</li>
            <li>Style Components</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Skills;
