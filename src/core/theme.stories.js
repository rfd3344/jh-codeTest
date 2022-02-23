import React from 'react';
import _ from 'lodash';
import { useTheme, Typography, Box, Grid } from '@mui/material';

export default {
  title: 'Theme',
};

const BOX_SIZE = 200;
const ColorBox = ({ color, children }) => (
  <Box height={BOX_SIZE} width={BOX_SIZE} m={1} bgcolor={color}>
    {children}
  </Box>
);
export const Palette = () => {
  const theme = useTheme();
  const { palette } = theme;

  return (
    <Grid container>
      <ColorBox color={palette.primary.main}>primary.main</ColorBox>
      <ColorBox color={palette.secondary.main}>secondary.main</ColorBox>
      <ColorBox color={palette.blue.light}>blue.light</ColorBox>
      <ColorBox color={palette.black.main}>black.main</ColorBox>
    </Grid>
  );
};

export const FontStyle = () => {
  return (
    <Box>
      <Typography variant="h1">Typography - h1</Typography>
      <Typography variant="h2">Typography - h2</Typography>
      <Typography variant="h3">Typography - h3</Typography>
      <Typography variant="h4">Typography - h4</Typography>
      <Typography variant="h5">Typography - h5</Typography>
      <Typography variant="h6">Typography - h6</Typography>
      <Typography variant="subtitle1">Typography - subtitle1</Typography>
      <Typography variant="subtitle1" color="textSecondary">
        Typography - subtitle1 color: textSecondary
      </Typography>
      <Typography variant="subtitle2">Typography - subtitle2</Typography>
      <Typography variant="button">Typography- button</Typography>
      <Typography> Typography noVariant</Typography>
    </Box>
  );
};
