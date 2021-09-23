import { useReducer } from "react";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Icon,
  Tooltip,
  IconButton,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import { MenuItem } from "./MenuItem";

import { routes } from "../../config";

import { Route } from "../../types/Route";

export const Menu = () => {
  const [isMenuOpen, toggleMenu] = useReducer((open) => !open, false);

  return (
    <List>
      {routes.map((route: Route) => (
        <>
          {route.subRoutes ? (
            <>
              <ListItem button onClick={toggleMenu}>
                <ListItemIcon>
                  <IconButton size="small">
                    {route.icon && <Icon component={route.icon} />}
                  </IconButton>
                </ListItemIcon>
                <ListItemText primary={route.title} />
                <Tooltip
                  title={`${isMenuOpen ? "Collapse" : "Expand"}`}
                  placement="bottom"
                >
                  {isMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </Tooltip>
              </ListItem>
              <Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
                <List>
                  {route.subRoutes.map((sRoute: Route) => (
                    <MenuItem key={`${sRoute.key}`} route={sRoute} />
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <MenuItem key={route.key} route={route} />
          )}
          {route.appendDivider && <Divider />}
        </>
      ))}
    </List>
  );
};
