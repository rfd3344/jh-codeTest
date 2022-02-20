import React from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';

import { TextFieldHookForm } from './TextFieldHookForm';
import { DropdownSelect } from './DropdownSelect';

export const CurrencyPanel = () => {
  return (
    <Grid container>
      <Grid item sm={5}>
        <Typography variant="h6">From </Typography>
        <Grid container>
          <Grid item xs={8}>
            <TextFieldHookForm />
          </Grid>
          <Grid item xs={4}>
            <DropdownSelect />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={2}>
          convert
      </Grid>
      <Grid item sm={5}>
        <Typography variant="h6">To </Typography>
      </Grid>
    </Grid>
  );
};
