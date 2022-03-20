import React from "react";
import { PADDING } from "../../../utilities/responsive";

interface ITableDetails {
  header: string;
  items: string[];
}

interface IProjectDetailsTableProps {
  tables: ITableDetails[];
}

export const ProjectDetailsTable: React.FC<IProjectDetailsTableProps> = (
  props: IProjectDetailsTableProps
) => {
  const { tables } = props;

  return (
    <div
      className={`grid grid-rows-2 grid-cols-2 gap-y-4 gap-x-2 justify-evenly max-w-5xl w-full mb-8 ${PADDING} sm:flex`}
    >
      {tables.map((table, idx) => {
        return (
          <div key={idx} className="text-center">
            <div className="font-header text-2xl sm:text-3xl">{table.header}</div>
            {table.items.map((item, idx) => {
              return <div key={idx}>{item}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};
