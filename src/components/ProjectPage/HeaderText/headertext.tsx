import React from "react";

export const enum HeaderSize {
  large = "large",
  medium = "medium",
  small = "small",
}

interface IHeaderTextProps {
  headerSize: HeaderSize;
}

export const HeaderText = (props: React.PropsWithChildren<IHeaderTextProps>) => {
  const { headerSize, children } = props;

  const HeaderTextSizes = {
    [HeaderSize.small]: "text-2xl",
    [HeaderSize.medium]: "text-3xl",
    [HeaderSize.large]: "text-4xl text-center mb-4 sm:text-5xl sm:mb-8",
  };

  return <div className={`font-header ${HeaderTextSizes[headerSize]}`}>{children}</div>;
};
