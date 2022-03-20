import { PADDING } from "../../utilities/responsive";

interface ITopTextHeaderProps {
  subHeaderText: string;
  headerText: string;
}

export const TopTextHeader: React.FC<ITopTextHeaderProps> = (props: ITopTextHeaderProps) => {
  const { subHeaderText, headerText } = props;

  return (
    <div className={`${PADDING}`}>
      <div className="font-body text-lg mb-5">{subHeaderText}</div>
      <div className="font-header text-3xl mb-20 max-w-4xl self-center">{headerText}</div>
    </div>
  );
};
