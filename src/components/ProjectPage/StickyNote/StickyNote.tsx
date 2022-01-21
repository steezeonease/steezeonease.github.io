import styles from "./StickyNote.module.scss";

interface IStickyNote {
  text: string;
  backgroundColor: string;
}

export const StickyNote = (props: IStickyNote) => {
  const { text, backgroundColor } = props;

  return (
    <div
      className={styles.root}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      "{text}"
      <div className={styles.shadow} />
    </div>
  );
};
