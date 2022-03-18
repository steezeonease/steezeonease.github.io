export const ProjectContainer = (props: React.PropsWithChildren<{}>) => {
  return (
    <div className="text-center self-center w-full flex flex-col justify-center items-center">
      {props.children}
    </div>
  );
};
