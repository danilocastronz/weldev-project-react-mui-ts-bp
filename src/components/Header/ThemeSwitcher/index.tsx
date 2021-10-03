import { useContext } from 'react';
import { Tooltip, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Flare, NightsStay } from '@mui/icons-material';

import { ThemeModeContext } from '../../../contexts';

export const ThemeSwitcher = () => {
  const theme = useTheme();
  const { toggleThemeMode } = useContext(ThemeModeContext);

  return (
    <Tooltip title="Toggle Theme" placement="bottom" arrow>
      <IconButton
        size="large"
        color="inherit"
        onClick={toggleThemeMode}
        aria-label={`Switch to ${theme.palette.mode === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme.palette.mode === 'light' ? <Flare /> : <NightsStay />}
      </IconButton>
    </Tooltip>
  );
};
