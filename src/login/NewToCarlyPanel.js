import { Box, Typography, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { ThirdPartyLogin } from './ThirdPartyLogin';
import { SignupForm } from './SignupForm';

const useStyles = makeStyles((theme) => ({}));

export const NewToCarlyPanel = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h4"> Continue with..</Typography>
      <ThirdPartyLogin />
      <Box my={3}>
        <Divider />
      </Box>
      <Box my={3}>
        <Typography variant="h4"> Or Sign Up with your email</Typography>
      </Box>
      <SignupForm />
    </Box>
  );
};
