import React from 'react';
import {
  Box,
  Link,
  Typography,
} from '@mui/material';
import {
  ArrowBackIcon,
} from 'src/core/icons';

const BackButton = ({
  href = '#',
  label = '',
  onClick = () => { },
  // sx = {},
  ...rest
}) => (
  <Link
    underline="none"
    href={href}
    onClick={onClick}
    {...rest}
  >
    <Box display="flex">
      <Box> <ArrowBackIcon fontSize="small" sx={{ transform: 'translateY(-3px)' }} /></Box>
      <Typography variant="h6" color="black">
        {label}
      </Typography>
    </Box>


  </Link >
);

export default BackButton;
