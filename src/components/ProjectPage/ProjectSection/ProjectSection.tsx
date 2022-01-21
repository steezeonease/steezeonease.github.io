import styles from "./ProjectSection.module.scss";

interface IProjectSection {
  header: string;
  children: JSX.Element;
}

export const ProjectSection = (props: IProjectSection) => {
  const { header, children } = props;

  return (
    <section>
      <h3 className={styles.header}>{header}</h3>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
};
