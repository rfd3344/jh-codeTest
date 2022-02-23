import { Typography, Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { TextFieldHookForm } from 'src/components/inputs/TextFieldHookForm';
import { openSnackbar, openErrorBar } from 'src/core/snackbar/snackbarSlice';

import { doLogin } from './loginSlice';

const validateFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateFormSchema),
  });

  const handleLogin = async (formData) => {
    const resp = await dispatch(doLogin(formData));
    if (resp.error) dispatch(openErrorBar(resp.error.message));
    else dispatch(openSnackbar('Success login.'));
  };

  return (
    <Box>
      <Box>
        <TextFieldHookForm
          formObj={{ register, errors }}
          name="email"
          label="Email address"
        />
        <TextFieldHookForm
          formObj={{ register, errors }}
          name="password"
          type="password"
          label="Create Password"
        />
      </Box>

      <Box mt={2}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit(handleLogin)}
        >
          Login
        </Button>
      </Box>
      <Box textAlign="center" mt={2}>
        <Typography variant="h5">
          <a href="https://">Forgot password?</a>
        </Typography>
        <Typography variant="h5">
          Don't have an account? <a href="https://">Sign up</a>
        </Typography>
      </Box>
    </Box>
  );
};
