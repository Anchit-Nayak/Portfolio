import React from 'react';

const About = () => {
  const skills = ['JavaScript', 'TypeScript', 'Next', 'React', 'Node.js', 'Postgres', 'MongoDB', 'Solidity'];

  return (
    <div id="About" className="wrapper-container mb-30 mt-10">
      <h2 className="text-3xl lg:text-4xl font-bold mb-3">About Me</h2>
      <div className="flex flex-col lg:flex-row gap-20 justify-between">
        <div className="prose lg:text-lg lg:w-2/3">
          <p>
            Hello! My name is Anchit. I am a tech enthusiast who loves to learn and try out new things, a self-taught developer, a Web3 believer, and a competitive programmer with strong logical thinking and problem solving ability.
          </p>
          <br />
          <p>
            I am a versatile developer specializing in full stack web development and blockchain technologies, dedicated to creating high-performance applications while actively contributing to open source projects to enhance existing solutions.
          </p>
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>

          <ul className="grid grid-cols-2 md:grid-cols-minmax140-200 gap-x-10 gap-y-0 m-0 mt-10 list-none">
            {skills && skills.map((skill, i) => <li key={i}>&gt; {skill}</li>)}
          </ul>
        </div>


        <div className='flex lg:w-1/2 h-full items-center justify-center'>
          <div className="flex items-center justify-center">
            <img src="src/assets/me.jpeg" alt="" className="object-cover h-[30rem] w-[25rem] rounded-2xl
             grayscale hover:grayscale-0 hover:-translate-x-1 hover:-translate-y-1 duration-300 mb-3"/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
