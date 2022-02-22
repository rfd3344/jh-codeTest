import { Box, Typography, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { ThirdPartyLogin } from './ThirdPartyLogin';
import { SignupForm } from './SignupForm';

const useStyles = makeStyles((theme) => ({}));

export const NewToCarlyPanel = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box py={4}>
        <Typography variant="h3"> Continue with..</Typography>
      </Box>
      <ThirdPartyLogin />
      <Box my={3}>
        <Divider />
      </Box>
      <Box my={3}>
        <Typography variant="h3"> Or Sign Up with your email</Typography>
      </Box>
      <SignupForm />
    </Box>
  );
};
