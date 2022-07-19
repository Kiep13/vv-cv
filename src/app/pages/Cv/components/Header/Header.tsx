import { Box, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { LANGUAGES, STYLES } from '../../constants';
import { ILanguage } from '../../interfaces';

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const {i18n} = useTranslation();

  const handleClick = (event: any): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleSetLanguage = (language: string): void => {
    i18n.changeLanguage(language);
    setAnchorEl(null);
  };

  return (
    <Box sx={STYLES.header.wrapper}>
      <LanguageIcon
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        sx={STYLES.header.icon}
        onClick={handleClick}
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
        sx={STYLES.header.menu}
      >
        {LANGUAGES.map((language: ILanguage) =>
          <MenuItem onClick={() => handleSetLanguage(language.code)}>{language.title}</MenuItem>
        )}
      </Menu>
    </Box>
  );
};
