import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from 'react-icons/fi'

const Contact = () => {
  return (
    <div id="Contact" className='flex flex-col items-center justify-center wrapper-container mb-56'>
      <h2 className="font-bold text-gray-300">What's Next?</h2>
      <h2 className="text-3xl lg:text-4xl font-bold mb-3">Get In Touch</h2>
      <h2 className=' max-w-xl text-center mb-3'>Whether you have a question or just want to say hi, my inbox is always open. I’ll try my best to get back to you!</h2>
      <div className='flex flex-row gap-4 py-3'>
        <a href="mailto:anchitnayak00@gmail.com">
        <FiMail className='text-4xl hover:scale-105'/>
        </a>

        <a href="https://github.com/Anchit-Nayak" target="_blank" rel="">
        <FaGithub className="text-4xl hover:scale-105" />
        </a>

        <a href="https://www.linkedin.com/in/anchit-nayak/" target="_blank" rel="">
        <FaLinkedin className="text-4xl hover:scale-105" />
        </a>

        <a href="https://twitter.com/AnchitNayakkk" target="_blank" rel="">
        <FaXTwitter className="text-4xl hover:scale-105" />
        </a>
      </div>
    </div>
  )
}

export default Contact