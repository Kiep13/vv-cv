import { Card, Typography } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { useDate } from '../../../../utils/hooks';
import { STYLES } from '../../constants';
import { CustomTooltip } from '../CustomTooltip';
import { IProps } from './propsInterface';

export const ExperienceCard = memo(({experience}: IProps) => {
  const {t} = useTranslation();
  const {formatDate} = useDate();

  const title = <Typography
    variant='h5'
    component='div'
    sx={STYLES.experienceCard.title}>
    {t(experience.titleTranslationKey)}
  </Typography>

  return (
    <Card sx={STYLES.experienceCard.wrapper}>
      {experience.isTitleTooltip ?
        <CustomTooltip title={t(experience.titleTooltipTranslationKey || '')}>
          {title}
        </CustomTooltip>
        : title
      }

      <Typography color='text.secondary' sx={STYLES.experienceCard.period} gutterBottom>
        {formatDate(experience.fromDate)} - {experience.toDate ? formatDate(experience.toDate) : t('shared.present')}
      </Typography>

      <Typography variant='body2' sx={STYLES.experienceCard.description}>
        {t(experience.descriptionTranslationKey)}
      </Typography>
    </Card>
  );
});
