import React from 'react';
import MoreIcon from '@mui/icons-material/More';

import { ActionItem } from '../ActionItem';

interface MoreProps {
  handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
}

export const More = ({ handleMobileMenuOpen }: MoreProps) => (
  <ActionItem title="More" icon={MoreIcon} onClick={handleMobileMenuOpen} />
);
