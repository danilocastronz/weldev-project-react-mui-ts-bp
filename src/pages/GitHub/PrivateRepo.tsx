import { Helmet } from 'react-helmet';

import { PageTitle } from '../../components/PageTitle';
import { PageWrapper } from '../../components/PageWrapper';

import { APP_TITLE, PAGE_TITLE_GH_PRIVATE } from '../../utils/constants';

export const GitHubPrivate = () => (
  <>
    <Helmet>
      <title>
        {PAGE_TITLE_GH_PRIVATE} | {APP_TITLE}
      </title>
    </Helmet>
    <PageWrapper>
      <PageTitle title={PAGE_TITLE_GH_PRIVATE} />
    </PageWrapper>
  </>
);
