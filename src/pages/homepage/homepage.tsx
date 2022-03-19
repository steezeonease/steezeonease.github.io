import React from "react";
import { PageContainer } from "../../components/PageComponents/PageContainer/pagecontainer";
import { TopTextHeader } from "../../components/TopTextHeader/toptextheader";
import { ProjectCard } from "./projectcard/projectcard";

export const Homepage: React.FC = () => {
  return (
    <PageContainer isMaxWidth={true}>
      <TopTextHeader
        subHeaderText="UX Designer based in Seattle, WA"
        headerText="
        My joys in life is to leave a positive imprint by adding a touch of humananity to others'
        daily life experiences."
      />
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
      <ProjectCard
        backgroundColor="#FFE9D8"
        backgroundImgSrc={require("./images/nse_preview.png")}
        projectName="designbysteeze"
        projectTagline="How might a husband and wife collaborate to build something beauitful?"
        linkToProject="/work/designbysteeze"
      />
    </PageContainer>
  );
};
