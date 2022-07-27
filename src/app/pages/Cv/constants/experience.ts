import moment from 'moment';

import { ExperienceType } from '../enums';
import { IExperience } from '../interfaces';

export const EXPERIENCE: IExperience[] = [
  {
    titleTranslationKey: 'experience.psu.title',
    isTitleTooltip: true,
    titleTooltipTranslationKey: 'experience.psu.titleTooltip',
    tag: ExperienceType.Education,
    fromDate: moment('2017-09-01', 'YYYY-MM-DD').toDate(),
    toDate: moment('2021-06-30', 'YYYY-MM-DD').toDate(),
    descriptionTranslationKey: 'experience.psu.description',
  },
  {
    titleTranslationKey: 'experience.iTechArt.title',
    tag: ExperienceType.Work,
    fromDate: moment('2021-07-07', 'YYYY-MM-DD').toDate(),
    toDate: null,
    descriptionTranslationKey: 'experience.iTechArt.description',
  },
]
