import React from "react";
import { IProjectDetails } from "./IProjectDetails";
import styles from "./ProjectDetailsTable.module.scss";
import { css } from "@fluentui/utilities";

interface IProjectDetailsTable {
  details: IProjectDetails;
}

export const ProjectDetailsTable: React.FC<IProjectDetailsTable> = (
  props: IProjectDetailsTable
) => {
  const { details } = props;
  const { team, keySkills, tools, timeline } = details;
  const { startDate, duration } = timeline;

  const renderSection = (sectionName: string, render: JSX.Element) => {
    return (
      <div className={styles.section}>
        <div className={styles.header}>{sectionName}</div>
        {render}
      </div>
    );
  };

  return (
    <div className={css(styles.root)}>
      {renderSection(
        "Team",
        <>
          {team.map((teamMember, idx) => {
            return (
              <div key={idx}>
                {teamMember.name} - {teamMember.role}
              </div>
            );
          })}
        </>
      )}
      {renderSection(
        "Key Skills",
        <>
          {keySkills.map((skill, idx) => {
            return <div key={idx}>{skill}</div>;
          })}
        </>
      )}
      {renderSection(
        "Tools",
        <>
          {tools.map((tool, idx) => {
            return <div key={idx}>{tool}</div>;
          })}
        </>
      )}
      {renderSection(
        "Project Duration",
        <>
          <div>{startDate}</div>
          <div>{duration}</div>
        </>
      )}
    </div>
  );
};
