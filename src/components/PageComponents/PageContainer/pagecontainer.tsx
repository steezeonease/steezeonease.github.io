export const PageContainer = (
  props: React.PropsWithChildren<{
    isMaxWidth?: boolean;
  }>
) => {
  const { children, isMaxWidth } = props;

  let classNames = "text-center self-center w-full flex flex-col items-center justify-center";

  if (isMaxWidth) {
    classNames += " max-w-5xl";
  }
  return <div className={classNames}>{children}</div>;
};
