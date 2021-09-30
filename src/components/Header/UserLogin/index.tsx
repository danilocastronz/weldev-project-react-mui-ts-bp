import React from 'react';
import IconButton from '@mui/material/IconButton';
import AccountIcon from '@mui/icons-material/AccountCircle';

interface UserLoginProps {
  menuId: string;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export const UserLogin = ({ menuId, handleProfileMenuOpen }: UserLoginProps) => (
  <IconButton
    size="large"
    edge="end"
    aria-label="account of current user"
    aria-controls={menuId}
    aria-haspopup="true"
    onClick={handleProfileMenuOpen}
    color="inherit"
  >
    <AccountIcon />
  </IconButton>
);
