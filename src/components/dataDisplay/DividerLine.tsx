import React from 'react';
import { Divider } from '@mui/material';

export default function DividerLinex({ sx = {}, noMargin = false }: any) {
  return (
    <Divider
      sx={{
        backgroundColor: 'common.darkBlue',
        my: !noMargin && 1,
        opacity: 0.5,
        ...sx,
      }}
    />
  );
}