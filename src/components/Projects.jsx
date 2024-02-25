import React from 'react'
import { ProjectCard } from './ProjectCard';
import ProjectCardLarge from './ProjectCardLarge';

const Projects = () => {
    const MyProjects = [
      {
        topic: "Spendr",
        link: "https://github.com/Anchit-Nayak/Verve",
        skills: ["Next.js", "TailwindCSS", "Postgres", "Prisma"],
        description: "A Wallet that helps you send and receive money with ease as well as keep track of your expenses."
      },
      {
        topic: "Verve",
        link: "https://github.com/Anchit-Nayak/Verve",
        skills: ["ReactJS", "TailwindCSS", "Express", "NodeJS", "MongoDB"],
        description: "A dynamic blog platform crafted with the MERN stack and FalconAI integration."
      },
      {
        topic: "AgroInvest",
        link: "https://github.com/Anchit-Nayak/Verve",
        skills: ["ReactJS", "TailwindCSS", "Express", "NodeJS", "MongoDB"],
        description: "A platform that connects farmers with investors to help them grow their business."
      },
    ];
  return (
    <div id="about" className="wrapper-container py-9 mt-[100px]">
    <h2 className="text-3xl lg:text-4xl font-bold mb-9">Projects I've Built</h2>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {
        MyProjects.map((project, index) => {
          return <ProjectCard key={index} topic={project.topic} link={project.link} skills={project.skills} description={project.description} />
        })
      }
      {
        MyProjects.map((project, index) => {
          return <ProjectCardLarge key={index} topic={project.topic} link={project.link} skills={project.skills} description={project.description} />
        })
      }
    </div>
  </div>
  )
}

export default Projects