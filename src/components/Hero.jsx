import React from "react"
import { WavyBackground } from "./ui/WavyBackground";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <WavyBackground className="mb-44">
      <div className="flex flex-col justify-between items-center h-screen">
        <div className="flex flex-col gap-2 text-center justify-center text-xl h-2/3 lg:h-full">
          <h1>Hi my name is,</h1>
          <div>
          <motion.div
           variants={{
            hidden: { opacity: 0 , y: 75 },
            visible: { opacity: 1, y: 0 }
           }}
           initial="hidden"
           animate="visible"
           transition={{ duration: 0.7}}
          >
          <h1 class="tracking-tighter z-10 text-center text-5xl py-4 lg:py-4 md:py-5 sm:py-2 lg:text-9xl text-transparent duration-5000 bg-white cursor-default text-edge-outline animate-title font-inter sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text font-bold text-shadow-2xl shadow-black">Anchit Nayak.</h1>
          </motion.div>
          </div>

          <motion.div
          variants={{
            hidden: { opacity: 0 , y: -75 },
            visible: { opacity: 1, y: 0 }
           }}
           initial="hidden"
           animate="visible"
           transition={{ duration: 0.7, delay: 0.5}}
          >
          <div className="text-gray-100 lg:text-3xl font-bold">
            I wield code to create wonders.
          </div>
          </motion.div>
          {/* <div className=" text-center text-gray-400 text-sm lg:text-lg px-3 lg:px-0">
            Driven software engineer with a passion for learning, a problem-solving mindset, and expertise in delivering innovative and efficient software products.
          </div> */}
        </div>
      </div>
    </WavyBackground>
  );
};

export default Hero;