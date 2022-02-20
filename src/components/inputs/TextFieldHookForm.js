import React from 'react';
import { FormControl, TextField } from '@mui/material';
import _ from 'lodash';

export function TextFieldHookForm({
  name, // required
  value = '',
  onChange = (e) => {},
  formObj,
  debounce = 200, // time of debonce
  label,
  ...rest
}) {
  const { register, errors } = formObj || {};

  const handleChange = debounce
    ? _.debounce((e) => onChange(e), debounce)
    : (e) => onChange(e);

  return (
    <FormControl fullWidth>
      <TextField
        name={name}
        label={label || `${_.capitalize(_.startCase(name))}`}
        variant="outlined"
        inputRef={register}
        defaultValue={value}
        onChange={(e) => handleChange(e)}
        error={_.has(errors, name)}
        helperText={_.get(errors, `${name}.message`)}
        {...rest}
      />
    </FormControl>
  );
}
