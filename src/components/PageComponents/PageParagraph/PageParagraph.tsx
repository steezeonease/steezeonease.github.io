import React from "react";
import { HeaderSize, HeaderText } from "../../ProjectPage/HeaderText/headertext";

interface IProjectParagraph {
  headerSize: HeaderSize;
  headerText: string;
}

export const PageParagraph = (props: React.PropsWithChildren<IProjectParagraph>) => {
  const { headerSize, headerText, children } = props;

  return (
    <div className="mb-8">
      <div className={"mb-4"}>
        <HeaderText headerSize={headerSize}>{headerText}</HeaderText>
      </div>
      {children && <>{children}</>}
    </div>
  );
};
