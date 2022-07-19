import { Card, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { STYLES } from '../../constants';
import { IProps } from './propsInterface';

export const ExperienceCard = ({experience}: IProps) => {
  const {t} = useTranslation();

  return (
    <Card sx={STYLES.experienceCard.wrapper}>
      <Typography variant='h5' component='div' sx={STYLES.experienceCard.title}>
        {t(experience.titleTranslationKey)}
      </Typography>

      <Typography color='text.secondary' sx={STYLES.experienceCard.period} gutterBottom>
        {experience.fromDate} - {experience.toDate}
      </Typography>

      <Typography variant='body2' sx={STYLES.experienceCard.description}>
        {t(experience.descriptionTranslationKey)}
      </Typography>
    </Card>
  );
};
