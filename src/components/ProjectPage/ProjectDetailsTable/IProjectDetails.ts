export interface IProjectMember {
  name: string;
  role: string;
}

export interface IProjectDetails {
  team: IProjectMember[];
  keySkills: string[];
  tools: string[];
  timeline: {
    startDate: string;
    duration: string;
  };
}
