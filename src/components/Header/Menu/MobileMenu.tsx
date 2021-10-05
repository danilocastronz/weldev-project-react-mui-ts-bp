import React from 'react';
import { Box, Menu, MenuItem } from '@mui/material';

import { Messages, Notifications, SignOut, Settings } from '../Actions';
import { ThemeSwitcher } from '../ThemeSwitcher';

interface MobileMenuProps {
  isMenuOpen: boolean;
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleMenuClose: () => void;
  anchorEl: HTMLElement | null;
}

export const MobileMenu = ({ isMenuOpen, handleMenuOpen, handleMenuClose, anchorEl }: MobileMenuProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Box sx={{ textAlign: 'center' }}>
        <MenuItem>
          <ThemeSwitcher disableTooltip />
          Toggle Theme
        </MenuItem>
        <MenuItem>
          <Messages total={15} disableTooltip />
          Messages
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Notifications total={20} disableTooltip />
          Notifications
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Settings disableTooltip />
          Settings
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <SignOut disableTooltip />
          Sign Out
        </MenuItem>
      </Box>
    </Menu>
  );
};
