import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';

import { CurrencyPanel } from './CurrencyPanel';
import { FeeDetails } from './FeeDetails';

export const Calculator = () => {
  return (
    <Container
      maxWidth="lg"
      component={Box}
      mt={2}
      py={1}
      bgcolor="grey.light"
      borderRadius={1}
    >
      <Typography variant="h4">Currency Converter</Typography>
      <CurrencyPanel />
      <FeeDetails />
    </Container>
  );
};
