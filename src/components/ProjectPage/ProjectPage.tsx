import { ParallaxHeader } from "../ParallaxHeader/ParallaxHeader";
import styles from "./ProjectPage.module.scss";
import appStyles from "../../css/App.module.scss";

interface IProjectPage {
  projectName: string;
  projectTagline: string;
  projectBackground: string;
  children: JSX.Element;
  imageOpacity: number;
}

export const ProjectPage: React.FC<IProjectPage> = (props: IProjectPage) => {
  const { projectName, projectTagline, projectBackground, children, imageOpacity } = props;

  return (
    <>
      <ParallaxHeader backgroundImage={projectBackground} imageOpacity={imageOpacity} />
      <div className={appStyles.textSection}>
        <h1 className={styles.projectName}>{projectName}</h1>
        <h2 className={styles.projectTagline}>{projectTagline}</h2>
      </div>
      {children}
    </>
  );
};
