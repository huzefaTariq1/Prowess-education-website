import React from "react";
import { logos } from "../../Data";
import { motion } from "framer-motion";
import Ed from "../../assets/127799-education.json"
import Lottie from "lottie-react"
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-red-500 mb-4">
            {" "}
            Your E-learning partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] text-white font-bold">
            Welcome to <br /> the new way <br /> to learn online
          </div>
          <p className="text-sm break-all leading-7 text-neutral-300 max-w-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            officia sit vitae quo, eum similique?
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-red-500 rounded-lg mr-4 text-sm">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-red-500 rounded-lg text-red-500 text-sm">
              Discover
            </button>
          </div>
        </div>
        <div >
        <Lottie animationData={Ed}/>
        </div>
      </div>
      <div>
        <p className="text-center text-white text-xl">
          We collaborate with{" "}
          <span className="text-red-500">
            100+ leading universities ans companies
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className="w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
