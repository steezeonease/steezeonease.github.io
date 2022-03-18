import React from "react";
import { HeaderSize, HeaderText } from "../HeaderText/headertext";

interface IProjectIntroProps {
  projectName: string;
  subtitle: string;
  headerImage: JSX.Element;
}

export const ProjectIntro: React.FC<IProjectIntroProps> = (props: IProjectIntroProps) => {
  const { projectName, subtitle, headerImage } = props;

  return (
    <>
      <div className="mb-4">
        <HeaderText headerSize={HeaderSize.large}>{projectName}</HeaderText>
      </div>
      <div className="font-body text-xl">{subtitle}</div>
      {headerImage}
    </>
  );
};
