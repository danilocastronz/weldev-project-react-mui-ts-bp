import React from 'react';
import AccountIcon from '@mui/icons-material/AccountCircle';

import { ActionItem } from '../ActionItem';

interface UserAccountProps {
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export const UserAccount = ({ handleProfileMenuOpen }: UserAccountProps) => (
  <ActionItem title="My Account" icon={AccountIcon} onClick={handleProfileMenuOpen} />
);
