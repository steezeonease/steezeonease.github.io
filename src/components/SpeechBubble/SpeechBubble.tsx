import React from "react";
import styles from "./SpeechBubble.module.scss";

interface ISpeechBubble {
  children: React.ReactNode;
}

export const SpeechBubble: React.FC<ISpeechBubble> = (props: ISpeechBubble) => {
  const { children } = props;

  return <div className={styles.root}>{children}</div>;
};
