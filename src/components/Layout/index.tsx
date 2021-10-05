import { FC, useState } from 'react';
import { styled, Box } from '@mui/material';

import { Navigation } from '../Navigation';
import { Header } from '../Header';
import { Footer } from '../Footer';

import { FOOTER_HEIGHT } from '../../utils/constants';

export const Layout: FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleNavigation = () => setOpen((status) => !status);

  return (
    <LayoutWrapper>
      <ContentWrapper>
        <Box component="header">
          <Header toggleNavigation={toggleNavigation} />
        </Box>
        <Navigation open={open} handleClose={toggleNavigation} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          {children}
        </Box>
      </ContentWrapper>
      <Box component="footer">
        <Footer />
      </Box>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled('div')`
  min-height: 100vh;
`;

const ContentWrapper = styled('div')`
  display: flex;
  min-height: calc(100vh - ${FOOTER_HEIGHT}px);
`;

const DrawerHeader = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));
