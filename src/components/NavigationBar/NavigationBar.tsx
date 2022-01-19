import styles from "./NavigationBar.module.scss";

export const NavigationBar: React.FC = () => {
  return (
    <div className={styles.navigationContainer}>
      <a href="#">Work</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">Resume</a>
    </div>
  );
};
