import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { STYLES } from '../../constants';
import { IProps } from './propsInterface';

export const ProjectCard = ({project}: IProps) => {
  const {t} = useTranslation();

  return (
    <Box sx={STYLES.projectCard.wrapper}>
      <Typography variant='h5' gutterBottom component='div' sx={STYLES.projectCard.title}>
        {project.title}
      </Typography>
      <Typography component='legend' sx={STYLES.projectCard.description}>
        {t(project.descriptionTranslationKey)}
      </Typography>
    </Box>
  )
}
