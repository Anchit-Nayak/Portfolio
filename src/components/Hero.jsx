import { motion } from 'framer-motion';
import React, { Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Hero = () => {
  return (
    <div className="mb-44 w-full">
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex w-full flex-col gap-2 text-center justify-center text-xl h-full lg:h-full">
          <div className='absolute inset-0 z-10 flex flex-col justify-center items-center'>
          <h1>Hi my name is,</h1>
          <motion.div
           variants={{
            hidden: { opacity: 0 , y: 75 },
            visible: { opacity: 1, y: 0 }
           }}
           initial="hidden"
           animate="visible"
           transition={{ duration: 0.7, delay: 3.2}}
          >
          <h1 class="tracking-tighter z-10 text-center text-5xl py-4 lg:py-4 md:py-5 sm:py-2 lg:text-9xl text-transparent duration-5000 bg-white cursor-default text-edge-outline animate-title font-inter sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text font-bold text-shadow-2xl shadow-black">Anchit Nayak.</h1>
          </motion.div>
          

          <motion.div
          variants={{
            hidden: { opacity: 0 , y: -75 },
            visible: { opacity: 1, y: 0 }
           }}
           initial="hidden"
           animate="visible"
           transition={{ duration: 0.7, delay: 3.8}}
          >
          <div className="text-gray-100 lg:text-3xl font-bold">
            I wield code to create wonders.
          </div>
          
          <div className=" text-ellipsis text-center text-gray-400 text-sm lg:text-lg px-3 lg:px-0">
            Driven software engineer with a passion for learning, a problem-solving mindset, and expertise in delivering innovative and efficient software products.
          </div>
          </motion.div>
          </div>

          <div className='inset-0 w-full h-full flex justify-center items-center'>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.0}>
                <MeshDistortMaterial
                  color="rgb(0, 0, 0)"
                  attach="material"
                  distort={0.5}
                  speed={5}
                />
                
              </Sphere>
              
            </Suspense>
            
          </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;