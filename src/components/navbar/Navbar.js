import React, { Component } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

export const Navbar = () => {
  return (
    <Box bgcolor="black" height={100}>
      <Container component={Box} height="100%">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          component={Box}
          height="100%"
        >
          <Grid item lg={6}>
            <img src="./images/Carlylogo.png" alt="carly logo" />
          </Grid>
          <Grid item lg={6}>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <img src="./images/phone.svg" alt="carly phone" />
              </Grid>
              <Grid item>
                <Box color="primary.main">
                  <Typography variant="h4">1300 000 000</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
