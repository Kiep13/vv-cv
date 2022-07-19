import moment from 'moment';

import { DATE_FORMAT } from '../../../utils/contants';
import { ExperienceType } from '../enums';
import { IExperience } from '../interfaces';

export const EXPERIENCE: IExperience[] = [
  {
    titleTranslationKey: 'experience.psu.title',
    tag: ExperienceType.Education,
    fromDate: moment('2017-09-01').format(DATE_FORMAT),
    toDate: moment('2021-06-30').format(DATE_FORMAT),
    descriptionTranslationKey: 'experience.psu.description',
  },
  {
    titleTranslationKey: 'experience.iTechArt.title',
    tag: ExperienceType.Work,
    fromDate: moment('2021-07-07').format(DATE_FORMAT),
    toDate: null,
    descriptionTranslationKey: 'experience.iTechArt.description',
  },
]
