import React, { FC, ReactElement, useState } from "react";
import clsx from 'clsx';
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Icon,
  Tooltip,
  IconButton
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import DefaultIcon from "@material-ui/icons/FileCopy";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useLocation } from 'react-router-dom';

// components
import MenuItem from "./MenuItem";
// app routes
import { routes } from "../config";
// interfaces
import RouteItem from "../model/RouteItem.model";

// define css-in-js
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    nested: {
      marginLeft: theme.spacing(2),
    },
    selected: {
      transition: "box-shadow",
      transitionDuration: "1s",
      boxShadow: `0 0 3px ${theme.palette.primary.main}, 0 0 9px ${theme.palette.primary.main}, 0 0 11px ${theme.palette.primary.main}, 0 0 30px ${theme.palette.primary.main}`
    },
  })
);

// functional component
const Menu: FC<{}> = (): ReactElement => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const location: any = useLocation();

  const handleClick = (): void => {
    setOpen(!open);
  };

  return (
    <List>
      {routes.map((route: RouteItem) => (
        <>
          {route.subRoutes ? (
            <>
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <IconButton
                    className={clsx({
                      [classes.selected]: !open && route.subRoutes.some((item: RouteItem) => item.path === location.pathname)
                    })}
                    size='small'
                  >
                    <Icon component={route.icon || DefaultIcon} />
                  </IconButton>
                </ListItemIcon>
                <ListItemText primary={route.title} />
                {open ? (
                  <Tooltip title="Collapse" placement="bottom">
                    <ExpandLess />
                  </Tooltip>
                ) : (
                    <Tooltip title="Expand" placement="bottom">
                      <ExpandMore />
                    </Tooltip>
                  )}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List className={classes.nested}>
                  {route.subRoutes.map((sRoute: RouteItem) => (
                    <MenuItem
                      key={`${sRoute.key}`}
                      title={sRoute.title}
                      icon={sRoute.icon}
                      tooltip={sRoute.tooltip}
                      path={sRoute.path}
                      enabled={sRoute.enabled}
                      component={sRoute.component}
                      subRoutes={sRoute.subRoutes}
                    />
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
              <MenuItem
                key={`${route.key}`}
                title={route.title}
                icon={route.icon}
                tooltip={route.tooltip}
                path={route.path}
                enabled={route.enabled}
                component={route.component}
                subRoutes={route.subRoutes}
              />
            )}
          {route.appendDivider && <Divider className={classes.divider} />}
        </>
      ))}
    </List >
  );
};

export default Menu;
