import { FC } from 'react';
import styled from '@emotion/styled';

import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout: FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
