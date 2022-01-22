import styles from "./ProjectCard.module.scss";
import cardImage from "./cardImage.svg";

interface IProjectCard {
  title: string;
  caseStudyTitle: string;
  imageStyles?: React.CSSProperties;
}

export const ProjectCard: React.FC<IProjectCard> = (props: IProjectCard) => {
  const { title, caseStudyTitle, imageStyles } = props;

  return (
    <div className={styles.cardContainer + " cardContainer"}>
      <div className={styles.cardFront}>
        <img style={imageStyles} src={cardImage} />
      </div>
      <div className={styles.cardHover}>
        <div className={styles.textContainer}>
          <div className={styles.projectTitle}>{title}</div>
          <div className={styles.projectDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam optio ut
            aspernatur accusamus voluptate nesciunt corporis aliquam repellendus no
          </div>
        </div>
      </div>
    </div>
  );
};
