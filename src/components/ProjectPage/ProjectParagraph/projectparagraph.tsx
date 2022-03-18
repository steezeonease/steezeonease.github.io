import React from "react";
import { HeaderSize, HeaderText } from "../HeaderText/headertext";

interface IProjectParagraph {
  headerSize: HeaderSize;
  headerText: string;
}

export const ProjectParagraph = (props: React.PropsWithChildren<IProjectParagraph>) => {
  const { headerSize, headerText, children } = props;

  return (
    <div className="mb-4">
      <div className={"mb-4"}>
        <HeaderText headerSize={headerSize}>{headerText}</HeaderText>
      </div>
      {children && <div className="pb-4">{children}</div>}
    </div>
  );
};
