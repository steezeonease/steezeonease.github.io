import React from "react";

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
    <div className="flex justify-evenly max-w-5xl w-full mb-8">
      {tables.map((table, idx) => {
        return (
          <div key={idx} className="text-center">
            <div className="font-header text-3xl">{table.header}</div>
            {table.items.map((item, idx) => {
              return <div key={idx}>{item}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};
