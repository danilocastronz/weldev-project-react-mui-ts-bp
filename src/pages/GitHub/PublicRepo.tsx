import { Helmet } from "react-helmet";

// components
import { PageTitle } from "../../components/PageTitle";
import { PageWrapper } from "../../components/PageWrapper";

// constants
import { APP_TITLE, PAGE_TITLE_GH_PUBLIC } from "../../utils/Constants";

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
