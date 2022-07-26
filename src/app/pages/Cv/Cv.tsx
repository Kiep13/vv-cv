import { Chip, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ExperienceCard, Header, ProjectCard } from './components';
import { CONTACT_LINKS, EXPERIENCE, PROJECTS, SKILLS, STYLES } from './constants';
import { IContactLink, IExperience, IProject } from './interfaces';

export const Cv = () => {
  const {t} = useTranslation();

  return (
    <Box sx={STYLES.page}>
      <Header/>
      <Box sx={STYLES.content}>
        <Box sx={STYLES.section}>
          <Typography variant='h1' component='div' gutterBottom sx={STYLES.title}>
            {t('greeting')}
          </Typography>
          <Typography variant='h1' component='div' gutterBottom sx={STYLES.title}>
            {t('nameIntroduce')}
          </Typography>

          <Typography component='legend' sx={STYLES.description}>
            {t('aboutDescription')}
          </Typography>

          <Box sx={STYLES.skills}>
            {SKILLS.map((skill: string) => <Chip label={skill} variant='outlined' sx={STYLES.skill} key={skill}/>)}
          </Box>
        </Box>

        <Box sx={STYLES.section}>
          <Typography component='legend' sx={STYLES.subtitle}>
            {t('sectionTitles.experience')}
          </Typography>

          <Box sx={STYLES.experienceCards}>
            {EXPERIENCE.map((experience: IExperience) =>
              <ExperienceCard experience={experience} key={experience.titleTranslationKey}/>
            )}
          </Box>
        </Box>
        
        {/*<Box sx={STYLES.section}>*/}
        {/*  <Typography component='legend' sx={STYLES.subtitle}>*/}
        {/*    {t('sectionTitles.projects')}*/}
        {/*  </Typography>*/}

        {/*  <Box sx={STYLES.projectCards}>*/}
        {/*    {PROJECTS.map((project: IProject) =>*/}
        {/*      <ProjectCard project={project} key={project.title}/>*/}
        {/*    )}*/}
        {/*  </Box>*/}
        {/*</Box>*/}

        <Box sx={STYLES.section}>
          <Typography component='legend' sx={STYLES.subtitle}>
            {t('sectionTitles.contactMe')}
          </Typography>
          <Box sx={STYLES.links}>
            {CONTACT_LINKS.map(({icon: Icon, link}: IContactLink) =>
              <a target='_blank' rel='noreferrer' href={link} key={link}>
                <Icon sx={STYLES.contactImage}/>
              </a>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
