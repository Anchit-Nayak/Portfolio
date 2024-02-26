import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion';

import useDatGui from '../hooks/useDatGui'

import useStore from '../helpers/store'
import { vertexShader, fragmentShader } from '../helpers/shaders'

// Default settings
const settings = {
  speed: 0.1,
  density: 1.5,
  strength: 0.2,
  frequency: 1.0,
  amplitude: 6.0,
  intensity: 7.0,
  wireframe: false,
}

const Page = () => {
  useStore.setState({ title: 'Sphere' })

  /**
   * GUI controls
   */
  const { wireframe } = useDatGui(settings)

  const Icosahedron = (props) => {
    const mesh = useRef()

    const uniforms = {
      uTime: { value: 0 },
      uSpeed: { value: settings.speed },
      uNoiseDensity: { value: settings.density },
      uNoiseStrength: { value: settings.strength },
      uFrequency: { value: settings.frequency },
      uAmplitude: { value: settings.amplitude },
      uIntensity: { value: settings.intensity },
    }

    useFrame(({ clock }) => {
      const current = mesh.current.material.uniforms

      current.uTime.value = clock.getElapsedTime()
      current.uSpeed.value = settings.speed
      current.uNoiseDensity.value = settings.density
      current.uNoiseStrength.value = settings.strength
      current.uFrequency.value = settings.frequency
      current.uAmplitude.value = settings.amplitude
      current.uIntensity.value = settings.intensity
    })

    return (
      <mesh ref={mesh} {...props}>
        <icosahedronBufferGeometry attach='geometry' args={[1, 64]} />
        <shaderMaterial
          attach='material'
          {...{ vertexShader, fragmentShader, uniforms, wireframe }}
        />
      </mesh>
    )
  }

  const Scene = () => {
    return (
      <Canvas
        camera={{
          position: [0, 0, 3],
        }}
      >
        <Icosahedron position={[0, 0, 0]} />
        <OrbitControls />
      </Canvas>
    )
  }

  return (
    <div className="mb-44 w-full">
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex w-full flex-col gap-2 text-center justify-center text-xl h-full lg:h-full">
        <div className='relative inset-0 z-50 flex flex-col justify-center items-center mix-blend-difference'>
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
        <h1 class="tracking-tighter text-center text-5xl py-4 lg:py-4 md:py-5 sm:py-2 lg:text-9xl text-transparent duration-5000 bg-white cursor-default text-edge-outline animate-title font-inter sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text font-bold text-shadow-2xl shadow-black">Anchit Nayak.</h1>
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

        <div className='absolute inset-0 z-20 w-full h-full flex justify-center items-center'>
        <Scene/>
        </div>
      </div>
    </div>
  </div>
  )
  
}
export default Page