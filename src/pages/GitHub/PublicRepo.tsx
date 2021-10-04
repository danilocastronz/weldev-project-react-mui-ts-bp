import { Helmet } from 'react-helmet';

import { PageTitle } from '../../components/PageTitle';
import { PageWrapper } from '../../components/PageWrapper';

import { APP_TITLE, PAGE_TITLE_GH_PUBLIC } from '../../utils/constants';

export const GitHubPublic = () => (
  <>
    <Helmet>
      <title>
        {PAGE_TITLE_GH_PUBLIC} | {APP_TITLE}
      </title>
    </Helmet>
    <PageWrapper>
      <PageTitle title={PAGE_TITLE_GH_PUBLIC} />
    </PageWrapper>
  </>
);
