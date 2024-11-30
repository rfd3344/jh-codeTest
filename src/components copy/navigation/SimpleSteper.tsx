
import {
  Grid,
  Box,
  Typography,
} from '@mui/material';

import { ArrowLeftIcon, ArrowRightIcon } from 'src/core/icons';


export default function SimpleSteper({
  step = 1,
  max = 1,
}) {

  return (
    <Grid container justifyContent="flex-end">
      {step !== 1 && (
        <Grid item>
          <ArrowLeftIcon />
        </Grid>
      )}


      <Grid item>
        <Typography variant="h6" color="primary">
          {step}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" color="gray">
          &nbsp;/ {max}
        </Typography>
      </Grid>
      {step !== max && (
        <Grid item>
          <ArrowRightIcon />
        </Grid>
      )}
    </Grid>
  );
}