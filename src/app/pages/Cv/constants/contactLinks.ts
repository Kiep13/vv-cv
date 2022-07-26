import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

import { IContactLink } from '../interfaces';

export const CONTACT_LINKS: IContactLink[] = [
  {
   icon: GitHubIcon,
   link: 'https://github.com/Lone-Marshal'
  },
  {
    icon: TelegramIcon,
    link: 'https://t.me/Lone_marshal'
  },
  {
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/in/%D0%B2%D0%B0%D0%BB%D0%B5%D1%80%D0%B8%D0%B9-%D0%B2%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2-8098051b2'
  },
  {
    icon: MailOutlineIcon,
    link: 'mailto:valery.volkau.software.developer@gmail.com'
  }
]
