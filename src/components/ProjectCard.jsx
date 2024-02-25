import React from "react";
import Skill from "./Skill";

export function ProjectCard({topic, link, skills, description}) {
  return (
    <div className="h-[29rem] md:h-[34rem] w-full flex items-center justify-center transform transition-transform duration-500 hover:scale-105 hover:shadow-lg border border-gray-500 p-3 rounded-2xl lg:hidden">
      <div className="w-full py-3">
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-auto h-auto">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {topic}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {description}
            </span>
          </div>
          <div className="w-full flex flex-row gap-2 mt-3 auto-rows-auto">
            {
              skills.map((skill, index) => {
                return <Skill key={index} tech={skill} />
              })
            }
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <img src="https://i.postimg.cc/s2j7FT7b/Screenshot-from-2024-02-14-01-23-14.png" alt="" className=" object-cover rounded-lg"/>
          </div>
        </div>
        </div>
    </div>
  );
}
