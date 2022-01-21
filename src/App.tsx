import React from "react";
import styles from "./App.module.scss";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { IntroductionBlurb } from "./components/IntroductionBlurb/IntroductionBlurb";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
initializeIcons();

function App() {
  return (
    <div className={styles.app}>
      <NavigationBar />
      <IntroductionBlurb />
      <div className={styles.cardsContainer}>
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
        <ProjectCard
          title={"Prep Doc"}
          caseStudyTitle={"Reducing the Language Gap Within Healthcare"}
        />
      </div>
    </div>
  );
}

export default App;
