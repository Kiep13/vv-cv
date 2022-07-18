import { Chip, Box, Typography } from '@mui/material';

import { ExperienceCard, ProjectCard } from './components';
import { CONTACT_LINKS, EXPERIENCE, PROJECTS, SKILLS, STYLES } from './constants';
import { IContactLink, IExperience, IProject } from './interfaces';

export const Cv = () => {
  return (
    <Box sx={STYLES.page}>
      <Box sx={STYLES.content}>
        <Box sx={STYLES.section}>
          <Typography variant='h1' component='div' gutterBottom sx={STYLES.title}>
            Hi!
          </Typography>
          <Typography variant='h1' component='div' gutterBottom sx={STYLES.title}>
            I'm Valera
          </Typography>

          <Typography component='legend' sx={STYLES.description}>
            If I don't know something - just give me some time. I become master.
          </Typography>

          <Box sx={STYLES.skills}>
            {SKILLS.map((skill: string) => <Chip label={skill} variant='outlined' sx={STYLES.skill} key={skill}/>)}
          </Box>
        </Box>

        <Box sx={STYLES.section}>
          <Typography component='legend' sx={STYLES.subtitle}>
            Experience
          </Typography>

          <Box sx={STYLES.experienceCards}>
            {EXPERIENCE.map((experience: IExperience) =>
              <ExperienceCard experience={experience} key={experience.title}/>
            )}
          </Box>
        </Box>


        <Box sx={STYLES.section}>
          <Typography component='legend' sx={STYLES.subtitle}>
            Projects
          </Typography>

          <Box sx={STYLES.projectCards}>
            {PROJECTS.map((project: IProject) =>
              <ProjectCard project={project} key={project.title}/>
            )}
          </Box>
        </Box>

        <Box sx={STYLES.section}>
          <Typography component='legend' sx={STYLES.subtitle}>
            Contact me
          </Typography>
          <Box sx={STYLES.links}>
            {CONTACT_LINKS.map(({icon: Icon, link}: IContactLink) =>
              <a target='_blank' href={link} key={link}>
                <Icon sx={STYLES.contactImage}/>
              </a>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
