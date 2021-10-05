import { useState } from 'react';
import { List, Divider, Collapse } from '@mui/material';

import { MenuItem } from './MenuItem';

import { routes } from '../../../config';
import { Route } from '../../../types';

export const Menu = () => {
  const [routesState, setRoutesStage] = useState<Route[]>(routes);

  const handleMenuClick = (route: Route) => {
    const items = routesState.map((item) => {
      if (item.key === route.key) {
        item.expanded = !item.expanded;
      }
      return item;
    });
    setRoutesStage(items);
  };

  return (
    <List component="nav">
      {routesState.map((route: Route) => (
        <>
          {route.subRoutes ? (
            <>
              <MenuItem key={`${route.key}`} route={route} hasChildren handleMenuClick={handleMenuClick} />
              <Collapse in={route.expanded} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {route.subRoutes.map((sRoute: Route) => (
                    <MenuItem key={`${sRoute.key}`} route={sRoute} nested />
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <MenuItem key={route.key} route={route} nested={false} />
          )}
          {route.appendDivider && <Divider />}
        </>
      ))}
    </List>
  );
};
