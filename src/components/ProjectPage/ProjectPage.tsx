import styles from "./ProjectPage.module.scss";

interface IProjectPage {
  projectName: string;
  projectTagline: string;
  splashScreenContent: {
    image: JSX.Element;
    caption: string;
  };
  children: JSX.Element;
}

export const ProjectPage: React.FC<IProjectPage> = (props: IProjectPage) => {
  const { projectName, projectTagline, splashScreenContent, children } = props;

  return (
    <>
      <h1 className={styles.projectName}>{projectName}</h1>
      <h2 className={styles.projectTagline}>{projectTagline}</h2>
      <div className={styles.splashContainer}>
        <figure className={styles.splashFigure}>
          {splashScreenContent.image}
          <figcaption>{splashScreenContent.caption}</figcaption>
        </figure>
      </div>
      {children}
    </>
  );
};
