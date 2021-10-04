import { Helmet } from 'react-helmet';

import { PageTitle } from '../components/PageTitle';
import { PageWrapper } from '../components/PageWrapper';

import { APP_TITLE, PAGE_TITLE_CODE } from '../utils/constants';

export const CodeEditor = () => (
  <>
    <Helmet>
      <title>
        {PAGE_TITLE_CODE} | {APP_TITLE}
      </title>
    </Helmet>
    <PageWrapper>
      <PageTitle title={PAGE_TITLE_CODE} />
    </PageWrapper>
  </>
);
