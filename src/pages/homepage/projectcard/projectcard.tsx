import React from "react";
import { Link } from "react-router-dom";

interface IProjectCardProps {
  backgroundColor: string;
  backgroundImgSrc: string;
  projectName: string;
  projectTagline: string;
  linkToProject: string;
}

export const ProjectCard: React.FC<IProjectCardProps> = (props: IProjectCardProps) => {
  const { backgroundColor, backgroundImgSrc, projectName, projectTagline, linkToProject } = props;

  return (
    <>
      <div className="max-w-full w-full mb-28">
        <Link
          className="group aspect-projectCard flex justify-center items-center rounded-md shadow-md mb-7 relative"
          style={{
            backgroundColor: backgroundColor,
          }}
          tabIndex={0}
          to={linkToProject}
        >
          <div className="absolute inset-0 hidden bg-white opacity-20 group-hover:block group-focus:block" />
          <img
            className="my-10 blur-none scale-100 transition-[filter] transition-[transform] group-hover:blur-lg group-hover:scale-105 group-focus:blur-lg group-focus:scale-105"
            src={backgroundImgSrc}
            alt={`${projectName} preview`}
          />
          <div className="opacity-0 transition-[opacity] bg-black text-white absolute px-6 py-2 rounded-sm group-hover:opacity-100 group-focus:opacity-100">
            View Project
          </div>
        </Link>
        <div className="text-left font-header text-4xl">{projectName}</div>
        <div className="text-left font-body text-lg">{projectTagline}</div>
      </div>
    </>
  );
};
