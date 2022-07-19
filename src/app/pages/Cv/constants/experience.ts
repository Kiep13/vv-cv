import moment from 'moment';

import { ExperienceType } from '../enums';
import { IExperience } from '../interfaces';

export const EXPERIENCE: IExperience[] = [
  {
    titleTranslationKey: 'experience.psu.title',
    tag: ExperienceType.Education,
    fromDate: moment('2017-09-01').format('MMM YYYY'),
    toDate: moment('2021-06-30').format('MMM YYYY'),
    descriptionTranslationKey: 'experience.psu.description',
  },
  {
    titleTranslationKey: 'experience.iTechArt.title',
    tag: ExperienceType.Work,
    fromDate: moment('2021-07-07').format('MMM YYYY'),
    toDate: 'Present',
    descriptionTranslationKey: 'experience.iTechArt.description',
  },
]
