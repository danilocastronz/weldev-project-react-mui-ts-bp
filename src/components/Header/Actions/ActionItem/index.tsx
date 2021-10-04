import React, { ComponentType } from 'react';
import { Badge, Icon, IconButton, Tooltip, useTheme } from '@mui/material';

interface ActionItemProps {
  title: string;
  icon: ComponentType;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  badgeContent?: number;
}

export const ActionItem = ({ title, icon, onClick, badgeContent }: ActionItemProps) => {
  const theme = useTheme();
  return (
    <Tooltip title={title} placement="bottom" arrow>
      {onClick ? (
        <IconButton size="large" color="inherit" onClick={onClick}>
          {badgeContent ? (
            <Badge badgeContent={badgeContent} color={theme.palette.mode === 'light' ? 'error' : 'primary'}>
              <Icon component={icon} />
            </Badge>
          ) : (
            <Icon component={icon} />
          )}
        </IconButton>
      ) : (
        <Icon component={icon} />
      )}
    </Tooltip>
  );
};
