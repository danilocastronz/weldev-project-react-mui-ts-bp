import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

// components
import AppMenu from "./AppMenu";

// constants
import { DRAWER_WIDTH } from "../../utils/Constants";
import { Drawer } from "@mui/material";

// // define css-in-js
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     drawer: {
//       width: DRAWER_WIDTH,
//       flexShrink: 0,
//       whiteSpace: "nowrap",
//     },
//     drawerOpen: {
//       width: DRAWER_WIDTH,
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     drawerClose: {
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       overflowX: "hidden",
//       width: theme.spacing(7) + 1,
//       [theme.breakpoints.up("sm")]: {
//         width: theme.spacing(9) + 1,
//       },
//     },
//     toolbar: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "flex-end",
//       padding: theme.spacing(0, 1),
//       ...theme.mixins.toolbar,
//       background: `linear-gradient(270deg, ${theme.palette.primary.main} 0%, ${theme.palette.background.default} 70%);`,
//     },
//   })
// );

interface NavigationProps {
  open: boolean;
  handleMenuClose: () => void;
}

export const Navigation = ({ open, handleMenuClose }: NavigationProps) => (
  <Drawer
    variant="permanent"
    // className={clsx(classes.drawer, {
    //   [classes.drawerOpen]: open,
    //   [classes.drawerClose]: !open,
    // })}
    // classes={{
    //   paper: clsx({
    //     [classes.drawerOpen]: open,
    //     [classes.drawerClose]: !open,
    //   }),
    // }}
  >
    <div className={classes.toolbar}>
      <IconButton onClick={handleMenuClose}>
        <ChevronLeftIcon htmlColor="#fff" />
      </IconButton>
    </div>
    <AppMenu />
  </Drawer>
);