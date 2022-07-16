import moment from 'moment';

import { ExperienceType } from '../enums';
import { IExperience } from '../interfaces';

export const EXPERIENCE: IExperience[] = [
  {
    title: 'Polotsk State University',
    tag: ExperienceType.Education,
    fromDate: moment('2017-09-01').format('MMM YYYY'),
    toDate: moment('2021-06-30').format('MMM YYYY'),
  },
  {
    title: 'iTechArt',
    tag: ExperienceType.Work,
    fromDate: moment('2021-07-07').format('MMM YYYY'),
    toDate: 'Present'
  },
]
