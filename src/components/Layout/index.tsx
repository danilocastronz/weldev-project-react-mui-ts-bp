import { FC } from 'react';
import { styled } from '@mui/material';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Navigation } from '../Navigation';

export const Layout: FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <header>
        <Header />
      </header>
      <main>
        <Navigation open={true} handleClose={() => {}} />
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
