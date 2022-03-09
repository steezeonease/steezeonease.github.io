import { css } from "@fluentui/utilities";
import React from "react";
import styles from "./SpeechBubble.module.scss";

interface ISpeechBubble {
  children: React.ReactNode;
  isCentered?: boolean;
  className?: string;
}

export const SpeechBubble: React.FC<ISpeechBubble> = (props: ISpeechBubble) => {
  const { children, className, isCentered } = props;

  return (
    <div
      className={css(className, styles.root, {
        [styles.isCentered]: isCentered,
      })}
    >
      {children}
    </div>
  );
};
