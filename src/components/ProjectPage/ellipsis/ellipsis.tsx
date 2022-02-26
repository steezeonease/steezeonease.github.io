import styles from "./ellipsis.module.scss";
import appStyles from "../../../css/App.module.scss";

export const Ellipsis = () => {
  return (
    <div className={appStyles.textSection}>
      <div className={styles.container} />
    </div>
  );
};
