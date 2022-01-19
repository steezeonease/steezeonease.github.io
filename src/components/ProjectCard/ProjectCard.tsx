import styles from "./ProjectCard.module.scss";
import cardImage from "./cardImage.svg";

interface IProjectCard {
  title: string;
  caseStudyTitle: string;
}

export const ProjectCard: React.FC<IProjectCard> = (props: IProjectCard) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardFront}>
        <img src={cardImage} />
      </div>
      <div className={styles.cardHover}>
        <div className={styles.projectTitle}>{props.title}</div>
        <div className={styles.projectDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veniam optio ut
          aspernatur accusamus voluptate nesciunt corporis aliquam repellendus non eum minus, quam
          harum. Dolorem animi officia quisquam amet! Distinctio?
        </div>
      </div>
    </div>
  );
};
