import { ColorNames } from '../enums';
import { COLORS } from './colors';

export const STYLES = {
  page: {
    width: '100%',
    minHeight: '100vh',

    display: 'flex',
    justifyContent: 'center',

    background: COLORS[ColorNames.Background],
    color: COLORS[ColorNames.Title],
    fontFamily: 'JetBrains Mono',

    overflowY: 'auto',
    overflowX: 'hidden'
  },
  content: {
    margin: '40px',
    width: '100%',
    maxWidth: '900px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '200px'
  },
  section: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'JetBrains Mono',
    fontSize: '100px',
    fontWeight: 'bold',

    textAlign: 'center',
    marginBottom: '15px'
  },
  description: {
    fontFamily: 'JetBrains Mono',
    fontSize: '28px',
    fontWeight: '200',

    color: COLORS[ColorNames.Text],

    textAlign: 'center',
    marginBottom: '20px'
  },
  subtitle: {
    fontFamily: 'JetBrains Mono',
    fontSize: '42px',
    fontWeight: 'bolder',

    color: COLORS[ColorNames.Subtitle],

    textAlign: 'center',
    whiteSpace: 'nowrap',
    marginBottom: '30px',

    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',

    '&::before': {
      width: '100%',
      display: 'block',
      content: '""',
      height: '1px',
      background: COLORS[ColorNames.Text]
    },

    '&::after': {
      width: '100%',
      display: 'block',
      content: '""',
      height: '1px',
      background: COLORS[ColorNames.Text]
    }
  },
  skills: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap'
  },
  skill: {
    fontFamily: 'JetBrains Mono',
    fontSize: '28px',
    fontWeight: 400,
    color: COLORS[ColorNames.Function],

    border: `2px solid ${COLORS[ColorNames.Function]}`,

    minWidth: '95px'
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '25px'
  },
  contactImage: {
    width: '50px',
    height: '50px',
    color: 'white'
  },
  experienceCards: {
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    gap: '20px',
    flexWrap: 'wrap'
  },
  experienceCard: {
    wrapper: {
      width: '300px',
      height: '200px',

      background: 'inherit',
      padding: '10px',

      borderRadius: 0,

      color: 'white',
      border: `1px solid ${COLORS[ColorNames.Border]}`,
      boxShadow: `10px 10px ${COLORS[ColorNames.Border]}`,

      '&:hover': {
        background: COLORS[ColorNames.FocusBackground]
      }
    },
    title: {
      display: 'flex',
      fontSize: '42px',

      color: COLORS[ColorNames.Name]
    },
    period: {
      color: COLORS[ColorNames.Hint],
      fontSize: 14
    },
    description: {
      fontSize: 18,
      fontWeight: 200,
      fontFamily: 'monospace',

      color: COLORS[ColorNames.Text]
    }
  },
  projectCards: {
    width: '100%',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center'
  },
  projectCard: {
    wrapper: {
      width: '300px',
      height: '200px',

      padding: '10px',

      border: `1px solid ${COLORS[ColorNames.Border]}`,
      boxShadow: `10px 10px ${COLORS[ColorNames.Border]}`,

      '&:hover': {
        background: COLORS[ColorNames.FocusBackground],
      }
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '42px',
      fontStyle: 'italic',

      color: COLORS[ColorNames.Name]
    },
    description: {
      fontSize: '18px',
      fontWeight: 200,
      fontFamily: 'monospace',

      color: COLORS[ColorNames.Text]
    }
  }
};
