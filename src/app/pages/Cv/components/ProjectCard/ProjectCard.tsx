import { Box, Typography } from '@mui/material';

import { STYLES } from '../../constants';
import { IProps } from './propsInterface';

export const ProjectCard = ({project}: IProps) =>
  <Box sx={STYLES.projectCard.wrapper}>
    <Typography variant='h5' gutterBottom component='div' sx={STYLES.projectCard.title}>
      {project.title}
    </Typography>
    <Typography component='legend' sx={STYLES.projectCard.description}>
      {project.description}
    </Typography>
  </Box>;
