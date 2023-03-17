import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-red-500 rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold text-white sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br /> best{" "}
            <span className="text-red-500">online courses</span>
          </div>
          <p className="text-sm break-all text-neutral-300 leading-7 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, totam earum. Minus deleniti repellat id! Ratione quia
            eum, explicabo quos eos magni vel corporis voluptatibus, inventore
            doloremque aliquam pariatur recusandae.
          </p>
          <button className="py-3 px-6 text-red-400 text-sm border border-solid border-red-500 rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
