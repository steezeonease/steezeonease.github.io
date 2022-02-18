import { ParallaxBanner } from "react-scroll-parallax";
import { NavLink } from "react-router-dom";
import styles from "./ProjectCard.module.scss";

interface IProjectCard {
  title: string;
  caseStudyTitle: string;
  imageSrc?: string;
  backgroundOpacity?: number;
  linkTo: string;
}

export const ProjectCard: React.FC<IProjectCard> = (props: IProjectCard) => {
  const { title, caseStudyTitle, imageSrc, backgroundOpacity, linkTo } = props;

  return (
    <ParallaxBanner layers={[{ image: `${imageSrc}`, speed: -20 }]}>
      <div className={styles.cardContainer}>
        <div
          className={styles.overlay}
          style={{
            opacity: backgroundOpacity,
          }}
        />
        <div className={styles.cardFront}>
          <div className={styles.textContainer + " sectionContainer"}>
            <NavLink to={`/work/${linkTo}`} className={styles.navLink}>
              <div className={styles.projectTitle}>{title}</div>
            </NavLink>
            <div className={styles.projectDescription}>{caseStudyTitle}</div>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};
