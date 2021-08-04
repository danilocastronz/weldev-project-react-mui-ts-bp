import { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";
import { makeStyles, createStyles } from "@material-ui/core/styles";

// components
import PageTitle from "../components/PageTitle";

// constants
import { APP_TITLE, PAGE_TITLE_CODE } from "../utils/constants";

// define css-in-js
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  })
);

const CodeEditor: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_CODE} | {APP_TITLE}
        </title>
      </Helmet>
      <div className={classes.root}>
        <PageTitle title={PAGE_TITLE_CODE} />
      </div>
    </>
  );
};

export default CodeEditor;
