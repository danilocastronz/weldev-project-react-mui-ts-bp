import { FC } from 'react';
import { styled } from '@mui/material';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Navigation } from '../Navigation';

import { HEADER_HEIGHT, FOOTER_HEIGHT } from '../../utils/constants';

export const Layout: FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <MainWrapper>
        <Navigation open={true} handleClose={() => {}} />
        {children}
      </MainWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeaderWrapper = styled('header')`
  height: ${HEADER_HEIGHT};
`;

const MainWrapper = styled('main')`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
`;

const FooterWrapper = styled('footer')`
  height: ${FOOTER_HEIGHT};
`;
