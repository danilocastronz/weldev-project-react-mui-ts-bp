import { Helmet } from 'react-helmet';

import { PageTitle } from '../components/PageTitle';
import { PageWrapper } from '../components/PageWrapper';

import { APP_TITLE, PAGE_TITLE_HOME } from '../utils/constants';

export const Home = () => (
  <>
    <Helmet>
      <title>
        {PAGE_TITLE_HOME} | {APP_TITLE}
      </title>
    </Helmet>
    <PageWrapper>
      <PageTitle title={PAGE_TITLE_HOME} />
    </PageWrapper>
  </>
);
