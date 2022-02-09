import { Parallax } from "react-parallax";
import { NavLink } from "react-router-dom";
import styles from "./ProjectCard.module.scss";

interface IProjectCard {
  title: string;
  caseStudyTitle: string;
  imageSrc?: string;
  bgImageStyle?: { [key: string]: any };
  backgroundOpacity?: number;
}

export const ProjectCard: React.FC<IProjectCard> = (props: IProjectCard) => {
  const { title, caseStudyTitle, imageSrc, bgImageStyle, backgroundOpacity } = props;

  const bgImageStyleNew = {
    ...bgImageStyle,
  };

  return (
    <Parallax bgImage={imageSrc} strength={-400} bgImageStyle={bgImageStyleNew}>
      <div
        className={styles.overlay}
        style={{
          opacity: backgroundOpacity,
        }}
      />
      <div className={styles.cardContainer}>
        <div className={styles.cardFront}>
          <div className={styles.textContainer + " sectionContainer"}>
            <NavLink to={"/work/prep-doc"} className={styles.navLink}>
              <div className={styles.projectTitle}>{title}</div>
            </NavLink>
            <div className={styles.projectDescription}>{caseStudyTitle}</div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};
