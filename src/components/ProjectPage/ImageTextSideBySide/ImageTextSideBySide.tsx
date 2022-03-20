import React from "react";

interface IImageTextSideBySideProps {
  textContent: JSX.Element;
  imageSrc: string;
  altText: string;
}

export const ImageTextSideBySide: React.FC<IImageTextSideBySideProps> = (
  props: IImageTextSideBySideProps
) => {
  const { textContent, imageSrc, altText } = props;

  return (
    <div className="flex flex-col space-y-8 sm:flex-row sm:space-x-8 sm:space-y-0">
      <div className="basis-1/2 flex flex-col justify-center">
        <img className="shadow-md" src={imageSrc} alt={altText} />
      </div>
      <div className="flex flex-col space-y-4 justify-center basis-1/2">{textContent}</div>
    </div>
  );
};
