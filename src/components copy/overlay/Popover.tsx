
import React, { useState } from 'react';
import {
  Box,
  Button,
  Popover as PopoverMui,
  Typography,
} from '@mui/material';

/*******
 * check https://mui.com/material-ui/react-popover/#anchor-playground
 *
 * @arg clickArea - component to control the popover
 * @arg anchorOrigin
 * @arg transformOrigin
 *
 */
export default function Popover({
  clickArea,
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
  },
  transformOrigin = {
    vertical: 'top',
    horizontal: 'center',
  },
  children,
  sx,
  ...rest
}: any) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handlePopoverClick =
  // const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <Box
        display="inline-block"
        sx={{ cursor: 'pointer' }}
        onClick={handleClick}
      >
        {clickArea}
      </Box>
      <PopoverMui
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        onClick={handleClose}
        {...rest}
      >
        {children}
      </PopoverMui>
    </Box>
  );
}
