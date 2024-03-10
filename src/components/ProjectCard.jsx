import React, { useEffect, useState } from "react";
import Skill from "./Skill";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import SkeletonCard from './SkeletonCard'

export function ProjectCard({ topic, projectLink, link, pic, skills, description }) {
  const [isImageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () =>{
      setImageLoaded(true);
  }

  useEffect(() => {
    // setTimeout( () => {
    const img = new Image();
    img.src = pic;
    img.onload = () => setImageLoaded(true);
    // }, 4000)
  }, [pic]);


  return (
    <>
    {!isImageLoaded && <SkeletonCard />}
    {isImageLoaded && (
    <div className={`group relative h-auto w-full flex items-center justify-center transform transition-transform duration-500 border border-gray-500 p-3 rounded-2xl`}>
      <div className="absolute inset-0 flex items-center justify-center w-full h-full opacity-0 z-0 group-hover:z-10 group-hover:opacity-100 group-hover:backdrop-filter group-hover:backdrop-blur-sm rounded-2xl gap-7">
        {
          projectLink &&
          <a href={projectLink} target="_blank" rel="">
            <FaGithub className="text-5xl " />
          </a>
        }
        { link && <a href={link} target="_blank" rel="">
          <MdOpenInNew className="text-5xl" />
        </a>}
      </div>
      <div className="w-full z-10 group-hover:z-0">
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-auto h-auto">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {topic}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {description}
            </span>
          </div>
          <div className="w-full flex flex-wrap gap-2 mt-3 auto-rows-auto">
            {
              skills.map((skill, index) => {
                return <Skill key={index} tech={skill} />
              })
            }
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <img src={pic} alt="" onLoad={handleImageLoaded} className=" object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>)}
    </>
  );
}
