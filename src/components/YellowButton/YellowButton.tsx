import { css, PrimaryButton } from "@fluentui/react";
import React from "react";
import styles from "./YellowButton.module.scss";

interface IYellowButton {
  text: string;
  linkTo: string;
  className?: string;
}

export const YellowButton: React.FC<IYellowButton> = (props: IYellowButton) => {
  const { text, className, linkTo } = props;

  return (
    <PrimaryButton
      text={text}
      className={css(styles.root, className)}
      href={linkTo}
      target={"_blank"}
    />
  );
};
