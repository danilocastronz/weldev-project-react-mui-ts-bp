import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { Flare, NightsStay } from '@mui/icons-material';

import { ActionItem } from '../Actions/ActionItem';

import { ThemeModeContext } from '../../../contexts';

export const ThemeSwitcher = () => {
  const theme = useTheme();
  const { toggleThemeMode } = useContext(ThemeModeContext);

  return (
    <ActionItem
      title="Toggle Theme"
      icon={theme.palette.mode === 'light' ? Flare : NightsStay}
      onClick={toggleThemeMode}
    />
  );
};
