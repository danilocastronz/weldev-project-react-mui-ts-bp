import { Helmet } from "react-helmet";

// components
import { PageTitle } from "../components/PageTitle";
import { PageWrapper } from "../components/PageWrapper";

// constants
import { APP_TITLE, PAGE_TITLE_DASHBOARD } from "../utils/Constants";

export const Dashboard = () => (
  <>
    <Helmet>
      <title>
        {PAGE_TITLE_DASHBOARD} | {APP_TITLE}
      </title>
    </Helmet>
    <PageWrapper>
      <PageTitle title={PAGE_TITLE_DASHBOARD} />
    </PageWrapper>
  </>
);
