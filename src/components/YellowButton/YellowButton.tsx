import { css, IButtonProps, PrimaryButton } from "@fluentui/react";
import React from "react";
import styles from "./YellowButton.module.scss";

interface IYellowButton extends IButtonProps {
  linkTo: string;
}

export const YellowButton: React.FC<IYellowButton> = (props: IYellowButton) => {
  const { className, linkTo } = props;

  return (
    <PrimaryButton
      {...props}
      className={css(styles.root, className)}
      href={linkTo}
      target={"_blank"}
    />
  );
};
