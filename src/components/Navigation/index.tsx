import { Drawer, styled } from '@mui/material';

import { Menu } from './Menu';

interface NavigationProps {
  open: boolean | undefined;
  handleClose: () => void;
}

export const Navigation = ({ open, handleClose }: NavigationProps) => {
  return (
    <Drawer variant="permanent" open={open} onClose={handleClose}>
      <DrawerHeader />
      <Menu />
    </Drawer>
  );
};

const DrawerHeader = styled('div')(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
