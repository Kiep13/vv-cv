import { Chip, Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ExperienceCard, Header } from './components';
import { CONTACT_LINKS, EXPERIENCE, SKILLS, STYLES, TECHNICAL_SKILLS } from './constants';
import { IContactLink, IExperience, ITechnicalSkill } from './interfaces';

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

          <Typography component='legend' sx={STYLES.description}>
            {t('aboutDescription')}
          </Typography>

          <Box sx={STYLES.skills}>
            {SKILLS.map((skill: string) => <Chip label={skill} variant='outlined' sx={STYLES.skill} key={skill}/>)}
          </Box>
        </Box>

        <Box sx={STYLES.section}>
          <Typography component='legend' sx={STYLES.subtitle}>
            {t('sectionTitles.skills')}
          </Typography>

          <Box sx={STYLES.technicalSkills}>
            {TECHNICAL_SKILLS.map((technicalSkill: ITechnicalSkill) =>
              <Box key={technicalSkill.positionNameKey} sx={STYLES.technicalSkill}>
                <Typography sx={STYLES.technicalSkillPosition}>
                  {t(technicalSkill.positionNameKey)}
                </Typography>
                <Typography sx={STYLES.technicalSkillValue}>{technicalSkill.skills.join(', ')}</Typography>
              </Box>
            )}
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
