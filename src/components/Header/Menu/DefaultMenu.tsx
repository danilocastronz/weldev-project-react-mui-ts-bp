import { Divider, Menu, MenuItem } from '@mui/material';

import { Settings, Preferences, SignOut } from '../Actions';

interface DefaultMenuProps {
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  anchorEl: HTMLElement | null;
}

export const DefaultMenu = ({ isMenuOpen, handleMenuClose, anchorEl }: DefaultMenuProps) => (
  <Menu anchorEl={anchorEl} id="primary-search-account-menu" keepMounted open={isMenuOpen} onClose={handleMenuClose}>
    <MenuItem onClick={handleMenuClose}>
      <Settings />
      Settings
    </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <Preferences />
      Preferences
    </MenuItem>
    <Divider />
    <MenuItem onClick={handleMenuClose}>
      <SignOut />
      Sign Out
    </MenuItem>
  </Menu>
);
