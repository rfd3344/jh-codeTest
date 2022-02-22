import { Box, Typography, Divider, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ThirdPartyLogin } from './ThirdPartyLogin';
import { LoginForm } from './LoginForm';

const useStyles = makeStyles((theme) => ({}));

export const LoginPanel = () => {
  const classes = useStyles();

  const { user } = useSelector((state) => state.login);

  if (user.userName) {
    return (
      <Box py={5}>
        <Typography variant="h3"> Logged in with {user.userName} </Typography>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/post"
          >
            Go to Post Page
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <Box py={5}>
        <Typography variant="h3"> Login with.. </Typography>
      </Box>
      <ThirdPartyLogin />
      <Box my={3}>
        <Divider />
      </Box>
      <Box my={3}>
        <Typography variant="h3">Or Log In with your email</Typography>
      </Box>
      <LoginForm />
    </Box>
  );
};
