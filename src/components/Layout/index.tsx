import { FC, useReducer } from "react";
import styled from "@emotion/styled";
import clsx from "clsx";

// components
import { Header } from "../Header";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";

// constants
import { DRAWER_WIDTH, FOOTER_HEIGHT } from "../../utils/Constants";

// // define css-in-js
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flex: 1,
//       display: "flex",
//       flexDirection: "column",
//     },
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing(3),
//       minHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
//       background: theme.palette.background.paper,
//       marginLeft: theme.spacing(7) + 1,
//       [theme.breakpoints.up("sm")]: {
//         marginLeft: theme.spacing(9) + 1,
//       },
//     },
//     toolbar: {
//       ...theme.mixins.toolbar,
//     },
//     contentShift: {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: DRAWER_WIDTH,
//     },
//   })
// );

interface LayoutProps {
  toggleTheme: () => void;
  useDefaultTheme: boolean;
}

export const Layout: FC<LayoutProps> = ({
  toggleTheme,
  useDefaultTheme,
  children,
}: LayoutProps) => {
  const [open, toggle] = useReducer((open) => !open, true);
  return (
    <LayoutWrapper>
      <Header
        open={open}
        handleMenuOpen={toggle}
        toggleTheme={toggleTheme}
        useDefaultTheme={useDefaultTheme}
      />
      <Navigation open={open} handleMenuClose={toggle} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </main>
      <footer>
        <Footer />
      </footer>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ChildrenWrapper = styled.div`
  ${(props) => ...props.theme.mixins.toolbar};
`;
