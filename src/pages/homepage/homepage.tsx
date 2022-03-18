import React from "react";
import { ProjectCard } from "./projectcard/projectcard";

export const Homepage: React.FC = () => {
  return (
    <div className="text-center max-w-5xl self-center w-full flex flex-col justify-center">
      <div className="font-body text-lg mb-5">UX Designer based in Seattle, WA</div>
      <div className="font-header text-3xl mb-20 max-w-4xl self-center">
        My joys in life is to leave a positive imprint by adding a touch of humananity to others'
        daily life experiences.
      </div>
      <ProjectCard
        backgroundColor="#DCE3FF"
        backgroundImgSrc={require("./images/ziefah_preview.png")}
        projectName="Ziefah Health"
        projectTagline="How might we make it easier for Muslim youth to access culturally fit therapists?"
        linkToProject="/work/ziefahhealth"
      />
      <ProjectCard
        backgroundColor="#F3FBEB"
        backgroundImgSrc={require("./images/nse_preview.png")}
        projectName="NSE Tropicals"
        projectTagline="How might I redesign this site to better the shopping experience for fellow plant collectors?"
        linkToProject="/work/nsetropicals"
      />
    </div>
  );
};
