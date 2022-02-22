import { Grid, Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: `${theme.spacing(2)} 0`,
    '& button': {
      width: '80%',
      padding: theme.spacing(1),
      color: 'black',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      '& .MuiButton-startIcon': {
        paddingRight: theme.spacing(1),
      },
    },
  },
}));

export const ThirdPartyLogin = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container className={classes.container}>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            startIcon={<img src="./images/Icon_Facebook.png" alt="Facebook" />}
          >
            FACEBOOK
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="outlined"
            startIcon={<img src="./images/Icon_Google.png" alt="Google" />}
          >
            GOOGLE
          </Button>
        </Grid>
      </Grid>
      <Typography variant="subtitle2">
        We will never share any of your data or post anything on your behalf.
      </Typography>
    </Box>
  );
};
