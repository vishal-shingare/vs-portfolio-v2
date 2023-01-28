import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly max-auto items-conter"
    >
      <h3 className="absolute top">About</h3>
    </div>
  );
};

export default About;
