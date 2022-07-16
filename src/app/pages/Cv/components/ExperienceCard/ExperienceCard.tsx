import { Card, Typography } from '@mui/material';

import { STYLES } from '../../constants';
import { IProps } from './propsInterface';

export const ExperienceCard = ({experience}: IProps) =>
  <Card sx={STYLES.experienceCard.wrapper}>
    <Typography variant='h5' component='div' sx={STYLES.experienceCard.title}>
      {experience.title}
    </Typography>

    <Typography color='text.secondary' sx={STYLES.experienceCard.period} gutterBottom>
      {experience.fromDate} - {experience.toDate}
    </Typography>

    <Typography variant='body2' sx={STYLES.experienceCard.description}>
      Description text which you need to imagine
    </Typography>
  </Card>;
