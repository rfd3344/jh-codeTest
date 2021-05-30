import React, { useState } from 'react';
import {
  Button,
  TextField,
  FormControl,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { connect } from 'react-redux';
import { editUser, addNewUser } from '@/actions/socialCard';
import { EditProfileType, User } from '@/schemas/socialCard';


function EditProfile({
  userInfo,
  title,
  isCreateNew,
  dispatch,
} : EditProfileType) {
  const [userDetails, setUserDetails] = useState<User | undefined>(userInfo);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if (isCreateNew) {
      dispatch(addNewUser(userDetails));
    } else {
      dispatch(editUser(userDetails));
    }

    handleClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newDetails = { ...userDetails };
    newDetails[name] = value;
    setUserDetails(newDetails);
  };

  return (
    <>
      <span onClick={handleClickOpen}>
        {
          isCreateNew ? (
            <Button variant="contained" color="primary" size="medium">
              Add New
            </Button>
          ) : <Edit />
        }
      </span>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <form noValidate autoComplete="off">
            <FormControl fullWidth>
              <TextField
                label="name"
                name="name"
                value={userDetails?.name || ''}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="email"
                name="email"
                value={userDetails?.email || ''}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="suite"
                name="suite"
                value={userDetails?.suite || ''}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="street"
                name="street"
                value={userDetails?.street || ''}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="city"
                name="city"
                value={userDetails?.city || ''}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="zipcode"
                name="zipcode"
                value={userDetails?.zipcode || ''}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="phone"
                name="phone"
                value={userDetails?.phone || ''}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                label="website"
                name="website"
                value={userDetails?.website || ''}
                onChange={handleChange}
              />
            </FormControl>

          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}



export default connect()(EditProfile);
