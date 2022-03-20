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
      <div className="font-header text-2xl mb-8 max-w-4xl self-center sm:text-3xl sm:mb-20">
        {headerText}
      </div>
    </div>
  );
};
