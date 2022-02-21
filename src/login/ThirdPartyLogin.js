import { Grid, Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({}));

export const ThirdPartyLogin = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container>
        <Grid item>
          <Button> FACEBOOK</Button>
        </Grid>
        <Grid item>
          <Button> GOOGLE</Button>
        </Grid>
      </Grid>
      <Typography variant="subtitle2">
        We will never share any of your data or post anything on your behalf.
      </Typography>
    </Box>
  );
};
