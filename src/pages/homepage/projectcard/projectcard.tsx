import { PrimaryButton } from "@fluentui/react";
import React from "react";
import { Link } from "react-router-dom";
import { PADDING } from "../../../utilities/responsive";

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
    <div className={`max-w-full w-full mb-16 ${PADDING} sm:mb-28`}>
      <Link
        className="group aspect-projectCard flex justify-center items-center rounded-md shadow-md mb-7 relative"
        style={{
          backgroundColor: backgroundColor,
        }}
        tabIndex={0}
        to={linkToProject}
      >
        <div className="absolute inset-0 hidden bg-white opacity-20  overflow-hidden w-full group-hover:block group-focus:block" />
        <img
          className="my-10 px-8 blur-none scale-100 transition-[filter] transition-[transform] group-hover:blur-lg group-hover:scale-105 group-focus:blur-lg group-focus:scale-105"
          src={backgroundImgSrc}
          alt={`${projectName} preview`}
        />
        <div className="opacity-0 transition-[opacity] bg-black text-white absolute px-6 py-2 rounded-sm group-hover:opacity-100 group-focus:opacity-100">
          View Project
        </div>
      </Link>
      <div className="text-left font-header text-2xl sm:text-4xl">{projectName}</div>
      <div className="text-left font-body text-md sm:text-lg">{projectTagline}</div>
      <div className="flex justify-start block mt-4 sm:hidden">
        <Link to={linkToProject}>
          <PrimaryButton
            className="bg-black text-white border-black hover:bg-black hover:border-black font-body"
            styles={{
              label: {
                fontWeight: 300,
              },
            }}
            text="View Project"
          />
        </Link>
      </div>
    </div>
  );
};
