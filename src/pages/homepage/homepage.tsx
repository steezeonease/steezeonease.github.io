import { Link } from "react-router-dom";
import { IntroductionBlurb } from "../../components/IntroductionBlurb/IntroductionBlurb";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";

import styles from "./homepage.module.scss";

export const Homepage = () => {
  return (
    <>
      <IntroductionBlurb />
      <div className={styles.cardsContainer}>
        <Link to="/work/prep-doc">
          <ProjectCard
            title={"Prep Doc"}
            caseStudyTitle={"Reducing the Language Gap Within Healthcare"}
          />
        </Link>
        <ProjectCard
          title={"Prep Doc"}
          caseStudyTitle={"Reducing the Language Gap Within Healthcare"}
        />
        <ProjectCard
          title={"Prep Doc"}
          caseStudyTitle={"Reducing the Language Gap Within Healthcare"}
        />
        <ProjectCard
          title={"Prep Doc"}
          caseStudyTitle={"Reducing the Language Gap Within Healthcare"}
        />
      </div>
    </>
  );
};
