import { NavLink } from "react-router-dom";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { Icon } from "@fluentui/react/lib/Icon";

import styles from "./Homepage.module.scss";

export const Homepage: React.FC = () => {
  return (
    <>
      <div className={styles.introContainer}>
        <div className={styles.topSection}>
          <div className={styles.emojiPicContainer}>
            <img alt="Memoji Hi" src={require("./images/Memoji_hi.png")} />
          </div>
          <div className={styles.blurbText}>
            <h1 className={styles.name}>Hannah Yi</h1>
            <h2 className={styles.locationText}>
              UX Designer
              <span className={styles.location}>
                <Icon iconName="POISolid" /> Seattle, WA
              </span>
            </h2>
            <h3 className={styles.blurb}>
              I listen, acknowledge, and connect with individuals to create products that are
              minimal, intentional, and accessible for communities, at large.
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <NavLink to="/work/prep-doc" className={styles.navLink}>
          <ProjectCard
            title={"Prep Doc"}
            caseStudyTitle={"Reducing the Language Gap Within Healthcare"}
            imageStyles={{
              bottom: 0,
              right: 0,
              width: "100%",
            }}
          />
        </NavLink>
        <ProjectCard
          title={"Prep Doc"}
          caseStudyTitle={"Reducing the Language Gap Within Healthcare"}
          imageStyles={{
            bottom: 0,
            right: 0,
            width: "100%",
          }}
        />
        <ProjectCard
          title={"Prep Doc"}
          caseStudyTitle={"Reducing the Language Gap Within Healthcare"}
          imageStyles={{
            bottom: 0,
            right: 0,
            width: "100%",
          }}
        />
        <ProjectCard
          title={"Prep Doc"}
          caseStudyTitle={"Reducing the Language Gap Within Healthcare"}
          imageStyles={{
            bottom: 0,
            right: 0,
            width: "100%",
          }}
        />
      </div>
      <div className={styles.footer}>
        <a href="mailto: designbysteeze@gmail.com">designbysteeze@gmail.com</a>
        <a href="https://www.linkedin.com/in/steeze/">linkedin.com/in/steeze</a>
      </div>
    </>
  );
};
