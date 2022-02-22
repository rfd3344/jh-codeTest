import { Snackbar, Alert, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useDispatch, useSelector } from 'react-redux';
import { closeSnackbar } from './snackbarSlice';

// limit message to 500 characters
const trimmedString = (str = '', limitSize = 500) => {
  return str.length > limitSize ? `${str.substring(0, limitSize - 3)}...` : str;
};

const useStyles = makeStyles(() => ({
  alert: {
    minWidth: '320px',
    fontSize: '16px',
  },
}));

export const GlobalSnackbar = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const snackbar = useSelector((state) => state.common?.snackbar) || {};

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={snackbar.open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        className={classes.alert}
        onClose={handleClose}
        severity={snackbar.isError ? 'error' : 'success'}
      >
        {trimmedString(snackbar.message)}
      </Alert>
    </Snackbar>
  );
};
