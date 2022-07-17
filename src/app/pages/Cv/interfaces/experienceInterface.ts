import { ExperienceType } from '../enums';

export interface IExperience {
  title: string;
  tag: ExperienceType;
  fromDate: string;
  toDate: string;
  description: string;
}
