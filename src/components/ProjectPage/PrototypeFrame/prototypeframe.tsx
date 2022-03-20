interface IPrototypeFrameProps {
  src: string;
}

export const PrototypeFrame = (props: React.PropsWithChildren<IPrototypeFrameProps>) => {
  const { src } = props;
  return (
    <div className="relative aspect-square lg:aspect-video">
      <iframe
        className="sm:absolute inset-0"
        title={"Prototype"}
        width="100%"
        height="100%"
        src={src}
        allowFullScreen
      ></iframe>
    </div>
  );
};
