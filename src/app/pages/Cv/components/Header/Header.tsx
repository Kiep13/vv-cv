import { Box, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

import { LANGUAGES, STYLES } from '../../constants';
import { ILanguage } from '../../interfaces';
import { useHeader } from './useHeader';

export const Header = () => {
  const {
    anchorEl,
    open,
    handleClick,
    handleClose,
    handleSetLanguage
  } = useHeader();

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
          <MenuItem onClick={() => handleSetLanguage(language.code)} key={language.code}>{language.title}</MenuItem>
        )}
      </Menu>
    </Box>
  );
};
