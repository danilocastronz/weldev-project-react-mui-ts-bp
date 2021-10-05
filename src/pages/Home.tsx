import { styled } from '@mui/material';
import { Helmet } from 'react-helmet';

import { PageTitle } from '../components/PageTitle';
import { PageWrapper } from '../components/PageWrapper';

import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';
import logo from '../logo.svg';

export const Home = () => (
  <>
    <Helmet>
      <title>
        {PAGE_TITLE_HOME} | {APP_TITLE}
      </title>
    </Helmet>
    <PageWrapper>
      {/* <PageTitle title={PAGE_TITLE_HOME} /> */}
      <StyleLogo src={logo} className="App-logo" alt="logo" />
    </PageWrapper>
  </>
);

const StyleLogo = styled('img')`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
