import React from 'react';
import { Icon, IconButton, lighten, ListItem, ListItemIcon, ListItemText, styled, Tooltip } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

import { Route } from '../../../../types';
import { ComponentType } from 'react-router/node_modules/@types/react';

interface MenuItemProps {
  route: Route;
}

export const MenuItem = ({ route }: MenuItemProps) => {
  const location = useLocation();

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!route.isEnabled) e.preventDefault();
  };

  const item = (
    <StyledListItem disabled={!route.isEnabled}>
      <ListItemIcon>
        <StyledIconButton size="small" isSelected={location.pathname === route.path}>
          {route.icon && <StyledIcon component={route.icon} isSelected={location.pathname === route.path} />}
        </StyledIconButton>
      </ListItemIcon>
      <ListItemText primary={route.title} />
    </StyledListItem>
  );

  return (
    <StyledNavLink to={`${route.path}`} key={route.key} onClick={handleNavigate}>
      {route.description ? (
        <Tooltip title={`${route.description}${!route.isEnabled ? ' (Not Allowed)' : ''}`} placement="right">
          {item}
        </Tooltip>
      ) : (
        item
      )}
    </StyledNavLink>
  );
};

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

const StyledListItem = styled(ListItem)<{ disabled: boolean }>`
  ${({ disabled }) => disabled && `* { cursor: not-allowed; }`}
`;

const StyledIconButton = styled(IconButton)<{ isSelected: boolean }>(({ isSelected, theme }) => ({
  boxShadow: isSelected ? `0 0 0 2px ${lighten(theme.palette.primary.main, 0.6)}` : 'default',
  transition: 'box-shadow 0.1s',
}));

const StyledIcon = styled(Icon)<{ isSelected: boolean; component: ComponentType<{}> }>`
  ${({ isSelected, theme }) => isSelected && `color: ${theme.palette.primary.main};`}
`;
