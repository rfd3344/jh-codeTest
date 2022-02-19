import React from 'react';
import { useTheme, Typography, Box, Grid, Button } from '@mui/material';

export default {
  title: 'Theme',
};

const BOX_SIZE = 200;

export const Palette = () => {
  const theme = useTheme();

  const ColorBox = ({ color, children }) => (
    <Box height={BOX_SIZE} width={BOX_SIZE} m={1} bgcolor={color}>
      {children}
    </Box>
  );

  console.warn('theme.palette', theme.palette);
  return (
    <Grid container>
      <ColorBox color={theme.palette.blue.main}> blue.main </ColorBox>
      {/* <ColorBox color={theme.palette.blue.light}> blue.light </ColorBox>
      <ColorBox color={theme.palette.gray.main}> gray.main </ColorBox>
      <ColorBox color={theme.palette.success.main}> success.main </ColorBox>
      <ColorBox color={theme.palette.error.main}> error.main </ColorBox> */}
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

export const Buttons = () => {
  return (
    <Box>
      <Button variant="contained" color="default">
        Cancel
      </Button>
      <Button variant="contained" color="primary">
        Delete
      </Button>
      <Button variant="contained" color="secondary">
        Save
      </Button>
      <Button>button</Button>
      <Button variant="outlined" color="primary">
        button
      </Button>
    </Box>
  );
};
