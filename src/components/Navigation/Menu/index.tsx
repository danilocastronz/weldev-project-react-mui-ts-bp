import { ComponentType, useState } from 'react';
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
  styled,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import { MenuItem } from './MenuItem';

import { routes } from '../../../config';
import { Route } from '../../../types';
import { useLocation } from 'react-router';

export const Menu = () => {
  const location = useLocation();
  const [routesState, setRoutesStage] = useState<Route[]>(routes);

  const handleMenuClick = (route: Route) => {
    if (route.subRoutes) {
      const items = routesState.map((item) => {
        if (item.key === route.key) {
          item.expanded = !item.expanded;
        }
        return item;
      });
      setRoutesStage(items);
    }
  };

  return (
    <List>
      {routesState.map((route: Route) => (
        <>
          {route.subRoutes ? (
            <>
              <ListItem button onClick={() => handleMenuClick(route)}>
                <ListItemIcon>
                  <IconButton size="small">
                    {route.icon && (
                      <StyledIcon
                        component={route.icon}
                        isSelected={route.subRoutes.some((e) => location.pathname === e.path)}
                      />
                    )}
                  </IconButton>
                </ListItemIcon>
                <ListItemText primary={route.title} />
                <Tooltip title={`${route.expanded ? 'Collapse' : 'Expand'}`} placement="bottom">
                  {route.expanded ? <ExpandLess /> : <ExpandMore />}
                </Tooltip>
              </ListItem>
              <Collapse in={route.expanded} timeout="auto" unmountOnExit>
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

const StyledIcon = styled(Icon)<{ isSelected: boolean; component: ComponentType<{}> }>(({ isSelected, theme }) => ({
  color: isSelected ? theme.palette.primary.main : 'default',
}));
