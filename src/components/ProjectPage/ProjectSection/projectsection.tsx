import React from "react";

interface IProjectSectionProps {
  backgroundColor?: string;
}

export const ProjectSection = (props: React.PropsWithChildren<IProjectSectionProps>) => {
  const { backgroundColor, children } = props;

  const contentElement = <div className="max-w-5xl text-left w-full mt-8 mb-4">{children}</div>;

  if (backgroundColor) {
    return (
      <div className="w-full flex justify-center" style={{ backgroundColor: backgroundColor }}>
        {contentElement}
      </div>
    );
  }
  return contentElement;
};
