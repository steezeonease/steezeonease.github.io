import React from "react";

import { PageContainer } from "../../components/PageComponents/PageContainer/pagecontainer";
import { TopTextHeader } from "../../components/TopTextHeader/toptextheader";
import { ProjectCard } from "./projectcard/projectcard";

export const Homepage: React.FC = () => {
  React.useEffect(() => {
    document.title = "designbysteeze";
  }, []);

  return (
    <PageContainer isMaxWidth={true}>
      <TopTextHeader
        subHeaderText="UX Designer based in Seattle, WA"
        headerText="
        Constantly putting people first through my design work."
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
        backgroundImgSrc={require("./images/designbysteeze_preview.png")}
        projectName="designbysteeze"
        projectTagline="How might I collaborate with my husband to build something beautiful?"
        linkToProject="/work/designbysteeze"
      />
    </PageContainer>
  );
};
