import React, { ComponentType } from 'react';
import { Badge, Icon, IconButton, styled, Tooltip } from '@mui/material';

interface ActionItemProps {
  title: string;
  icon: ComponentType;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  badgeContent?: number;
}

export const ActionItem = ({ title, icon, onClick, badgeContent }: ActionItemProps) => (
  <Tooltip title={title} placement="bottom" arrow>
    <IconButton size="large" color="inherit" onClick={onClick}>
      {badgeContent ? (
        <StyledBadge badgeContent={badgeContent} color="error">
          <Icon component={icon} />
        </StyledBadge>
      ) : (
        <Icon component={icon} />
      )}
    </IconButton>
  </Tooltip>
);

const StyledBadge = styled(Badge)`
  :hover {
    transform: scale(1.1);
  }
`;
