import styles from "./ProjectCard.module.scss";

interface IProjectCard {
  title: string;
  caseStudyTitle: string;
  imageSrc: string;
  imageStyles?: React.CSSProperties;
  imageContainerStyles?: React.CSSProperties;
}

export const ProjectCard: React.FC<IProjectCard> = (props: IProjectCard) => {
  const { title, caseStudyTitle, imageStyles, imageSrc, imageContainerStyles } = props;

  return (
    <div className={styles.cardContainer + " cardContainer"}>
      <div className={styles.cardFront} style={imageContainerStyles}>
        <img style={imageStyles} src={imageSrc} />
      </div>
      <div className={styles.cardHover}>
        <div className={styles.textContainer}>
          <div className={styles.projectTitle}>{title}</div>
          <div className={styles.projectDescription}>{caseStudyTitle}</div>
        </div>
      </div>
    </div>
  );
};
