import { Helmet } from 'react-helmet';

import { PageTitle } from '../components/PageTitle';
import { PageWrapper } from '../components/PageWrapper';

import { APP_TITLE, PAGE_TITLE_SETTINGS } from '../utils/constants';

export const Settings = () => (
  <>
    <Helmet>
      <title>
        {PAGE_TITLE_SETTINGS} | {APP_TITLE}
      </title>
    </Helmet>
    <PageWrapper>
      <PageTitle title={PAGE_TITLE_SETTINGS} />
    </PageWrapper>
  </>
);
