import styles from "./ellipsis.module.scss";

export const Ellipsis = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  );
};
