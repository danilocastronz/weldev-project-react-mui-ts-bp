import { makeStyles, createStyles, Theme, Link } from "@material-ui/core";

// constants
import { FOOTER_TEXT, FOOTER_HEIGHT } from "../utils/constants";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      background: theme.palette.background.paper,
      minHeight: FOOTER_HEIGHT,
    },
    footer: {
      textTransform: "uppercase",
    },
  })
);

// functional component
const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link
        href={`${process.env.REACT_APP_API_URL}`}
        target="_blank"
        rel="noreferrer"
        className={classes.footer}
      >
        {FOOTER_TEXT}
      </Link>
    </div>
  );
};

export default Footer;
