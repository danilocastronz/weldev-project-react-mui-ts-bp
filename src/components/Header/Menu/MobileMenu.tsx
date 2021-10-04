import React, { useContext } from 'react';
import { Menu, MenuItem } from '@mui/material';

import { Messages, Notifications, SignOut, Settings } from '../Actions';
import { ThemeSwitcher } from '../ThemeSwitcher';

import { ThemeModeContext } from '../../../contexts';

interface MobileMenuProps {
  isMenuOpen: boolean;
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  handleMenuClose: () => void;
  anchorEl: HTMLElement | null;
}

export const MobileMenu = ({ isMenuOpen, handleMenuOpen, handleMenuClose, anchorEl }: MobileMenuProps) => {
  const { toggleThemeMode } = useContext(ThemeModeContext);
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
      <MenuItem onClick={handleMenuClose}>
        <Messages total={15} />
        <p>Messages</p>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Notifications total={20} />
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Settings />
        <p>Settings</p>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <SignOut />
        <p>Sign Out</p>
      </MenuItem>
    </Menu>
  );
};
