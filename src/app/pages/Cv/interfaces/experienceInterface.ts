import { ExperienceType } from '../enums';

export interface IExperience {
  titleTranslationKey: string;
  tag: ExperienceType;
  fromDate: Date;
  toDate: Date | null;
  descriptionTranslationKey: string;
  isTitleTooltip?: boolean;
  titleTooltipTranslationKey?: string;
}
