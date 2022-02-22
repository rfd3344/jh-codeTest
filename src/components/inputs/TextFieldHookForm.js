import React from 'react';
import { FormControl, TextField, InputLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: theme.spacing(1),
    '& .MuiInput-root': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputLabel-root': {
      fontSize: '22px',
      color: 'black',
    },
  },
}));

export function TextFieldHookForm({
  name, // required
  value = '',
  onChange = (e) => {},
  formObj,
  debounce = 200, // time of debonce
  label,
  ...rest
}) {
  const classes = useStyles();
  const { register, errors } = formObj || {};
  if (!name) {
    console.error('TextFieldHookForm must have `name` prop');
    return null;
  }

  const handleChange = debounce
    ? _.debounce((e) => onChange(e), debounce)
    : (e) => onChange(e);

  return (
    <FormControl fullWidth>
      <TextField
        className={classes.textField}
        name={name}
        label={label || `${_.capitalize(_.startCase(name))}`}
        variant="standard"
        focused
        // inputRef={register}
        InputProps={{ ...register(name) }}
        defaultValue={value}
        onChange={(e) => handleChange(e)}
        error={_.has(errors, name)}
        helperText={_.get(errors, `${name}.message`)}
        {...rest}
      />
    </FormControl>
  );
}
