import React from 'react';

const About = () => {
  const skills = ['TypeScript', 'Next.js', 'React', 'Node.js', 'Postgres', 'MongoDB', 'Prisma', 'Cloudflare'];

  return (
    <div id="About" className="wrapper-container mb-72 relative">
      <h2 className="text-3xl lg:text-4xl font-bold mb-3">About Me</h2>
      <div className="flex flex-col lg:flex-row gap-20 justify-between">
        <div className="prose lg:text-lg lg:w-[40rem]">
          <p>
            Hello! My name is Anchit. I am a tech enthusiast who loves to learn and try out new things, a self-taught developer, a Web3 believer with strong logical thinking and problem-solving ability.
          </p>
          <br />
          <p>
            I am a versatile developer specializing in full-stack web development dedicated to creating high-performance applications while actively contributing to open-source projects to enhance existing solutions.
          </p>
          <br />
          <p>Here are a few technologies I’ve been working with recently:</p>

          <ul className="grid grid-cols-2 md:grid-cols-minmax140-200 gap-x-10 gap-y-0 m-0 mt-10 list-none">
            {skills && skills.map((skill, i) => <li key={i}>&gt; {skill}</li>)}
          </ul>
        </div>

        <div className="lg:w-1/2 h-full lg:absolute lg:top-[2rem] lg:-right-[5rem] lg:flex lg:items-center lg:justify-center">
          <div className="flex items-center justify-center group mt-[1rem]">
            <div className="border-2 border-gray-500 h-[22rem] w-[20rem] lg:h-[25rem] lg:w-[22rem] group-hover:border-white group-hover:translate-x-1 group-hover:translate-y-1 duration-500">
              <img src="https://i.postimg.cc/nrfwKYcv/me.jpg" alt="" className="object-cover h-[22rem] w-[20rem] lg:h-[25rem] lg:w-[22rem] grayscale group-hover:grayscale-0 group-hover:-translate-x-2 group-hover:-translate-y-2 duration-300 -mt-[1rem] -ml-[1rem]"/>
              <div className="w-full h-full bg-transparent"></div> {/* This div ensures the absolute div has content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
