import React from 'react'
import { ProjectCard } from './ProjectCard';
import ProjectCardLarge from './ProjectCardLarge';
import SkeletonCard from './SkeletonCard';

const Projects = () => {
    const MyProjects = [
      // {
      //   topic: "ChatApp",
      //   projectLink: "https://github.com/Anchit-Nayak/ChatApp",
      //   link: "",
      //   pic:"https://i.postimg.cc/s2j7FT7b/Screenshot-from-2024-02-14-01-23-14.png",
      //   skills: ["ReactJS","Socket.io", "Redis", "Postgres", "Express", "Formik","Yup"],
      //   description: "A real-time chat application with a user-friendly interface and a secure authentication system.",
      // },
      {
        topic: "Verve",
        projectLink: "https://github.com/Anchit-Nayak/Verve",
        link: "",
        pic:"https://i.postimg.cc/yYBxxjYW/Screenshot-from-2024-02-29-01-29-24.png",
        skills: ["ReactJS", "TailwindCSS", "Express", "NodeJS", "MongoDB"],
        description: "A dynamic blog platform crafted with the MERN stack and FalconAI integration."
      },
      {
        topic: "AgroInvest",
        projectLink: "https://github.com/Anchit-Nayak/AgroInvest-Frontend",
        link: "",
        pic:"https://i.postimg.cc/q7QFrZYK/Screenshotfrom2024-02-1400-50-1.jpg",
        skills: ["ReactJS", "TailwindCSS", "Express", "NodeJS", "MongoDB"],
        description: "A platform that connects farmers with investors to help them grow their business and reach potential Investors to sell their crop."
      },
    ];
  return (
    <div id="Projects" className="wrapper-container mb-56">
    <h2 className="text-3xl lg:text-4xl font-bold mb-9">Projects I've Built</h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {
        MyProjects.map((project, index) => {
          return <ProjectCard key={index} topic={project.topic} projectLink={project.projectLink} link={project.link} pic={project.pic} skills={project.skills} description={project.description} />
        })
      }
    </div>
  </div>
  )
}

export default Projects