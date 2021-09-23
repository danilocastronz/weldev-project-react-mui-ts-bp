import React from "react";
import {
  Icon,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

import { Route } from "../../../types/Route";

interface MenuItemProps {
  route: Route;
}

export const MenuItem = ({ route }: MenuItemProps) => {
  const location = useLocation();

  const handleNavigate = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!route.isEnabled) e.preventDefault();
  };

  return (
    <NavLink
      to={`${route.path}`}
      style={{ textDecoration: "none", color: "inherit" }}
      key={route.key}
      onClick={handleNavigate}
    >
      <Tooltip title={route.description ?? ""} placement="right">
        <ListItem button disabled={!route.isEnabled}>
          <ListItemIcon>
            <IconButton size="small">
              {route.icon && <Icon component={route.icon} />}
            </IconButton>
          </ListItemIcon>
          <ListItemText primary={route.title} />
        </ListItem>
      </Tooltip>
    </NavLink>
  );
};
