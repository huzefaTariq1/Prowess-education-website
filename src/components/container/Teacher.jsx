import React from "react";
import { accordions } from "../../Data";
import Accordion from "./Accordion";
import Te from "../../assets/129236-orange-student-studyng.json"
import Lottie from "lottie-react"
const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold text-white sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-red-500">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm break-all leading-7 text-neutral-300 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-red-500 text-white rounded-lg text-sm font-bold ">
            Start Teaching
          </button>
        </div>
        <div className="border-[3px] border-solid border-red-500 rounded-lg p-4 md:w-3/4 sm:row-start-1">
          <Lottie animationData={Te}/>
        </div>
        <div className="pl-5">
          <div className="font-bold text-white sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-red-500">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm break-all leading-7 text-neutral-300 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-red-500 text-white rounded-lg text-sm font-bold ">
            Get Started
          </button>
        </div>
        <div className="border-[3px] border-solid border-red-500 rounded-lg  p-4 md:w-3/4">
        <Lottie animationData={Te}/>
        </div>
      </div>
      <div className="text-center text-white my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-red-500">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
