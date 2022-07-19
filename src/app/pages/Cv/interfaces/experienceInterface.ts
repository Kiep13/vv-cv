import { ExperienceType } from '../enums';

export interface IExperience {
  titleTranslationKey: string;
  tag: ExperienceType;
  fromDate: string;
  toDate: string;
  descriptionTranslationKey: string;
}
