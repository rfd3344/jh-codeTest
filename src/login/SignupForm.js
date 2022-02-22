import { Typography, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { TextFieldHookForm } from 'src/components/inputs/TextFieldHookForm';
import { openSnackbar } from 'src/core/snackbar/snackbarSlice';

const useStyles = makeStyles((theme) => ({}));

const validateFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

export const SignupForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validateFormSchema),
  });

  const handleChange = (e) => {};

  const handleSignup = (formData) => {
    dispatch(openSnackbar(`Success sign up. (this is mock sign up)`));
  };

  return (
    <Box>
      <TextFieldHookForm
        formObj={{ register, errors }}
        name="name"
        label="Name"
        onChange={handleChange}
      />
      <TextFieldHookForm
        formObj={{ register, errors }}
        name="email"
        label="Email address"
        onChange={handleChange}
      />
      <TextFieldHookForm
        formObj={{ register, errors }}
        name="password"
        type="password"
        label="Create Password"
        onChange={handleChange}
      />
      <Box textAlign="center" my={2}>
        <Typography variant="subtitle1">
          By signing up, you agree to Carly's website &nbsp;
          <a
            href="https://www.carly.co/website-terms-conditions"
            target="_blank"
          >
            Terms & Conditions
          </a>
          &nbsp; and
          <a
            href="https://www.carly.co/website-terms-conditions"
            target="_blank"
          >
            &nbsp; Privacy Policy
          </a>
          .
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleSubmit(handleSignup)}
        >
          Sign up
        </Button>
      </Box>
      <Box textAlign="center" mt={2}>
        <Typography variant="h5">
          Already have an account? <a href="https://">Log in</a>
        </Typography>
      </Box>
    </Box>
  );
};
