import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const useHeader = () => {
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

  return {
    anchorEl,
    open,
    handleClick,
    handleClose,
    handleSetLanguage
  }
}
