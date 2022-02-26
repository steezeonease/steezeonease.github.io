import styles from "./ProjectSection.module.scss";
import appStyles from "./../../../css/App.module.scss";
import { Ellipsis } from "../ellipsis/ellipsis";

interface IProjectSection {
  header?: JSX.Element;
  children: JSX.Element;
  isLineHidden?: boolean;
}

export const ProjectSection = (props: IProjectSection) => {
  const { header, children, isLineHidden } = props;

  return (
    <section className={appStyles.textSection}>
      {header && <h3 className={styles.header}>{header}</h3>}
      <div className={styles.sectionContent}>{children}</div>
      {!isLineHidden && <Ellipsis />}
    </section>
  );
};
