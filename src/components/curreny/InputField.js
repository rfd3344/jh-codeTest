import { FormControl, TextField, Typography } from '@mui/material';
import _ from 'lodash';

export const InputField = ({
  name,
  value = '',
  label,
  debounce = 200, // time of debonce
  onChange = (e) => {},
  ...rest
}) => {
  const handleChange = debounce
    ? _.debounce((e) => onChange(e), debounce)
    : (e) => onChange(e);

  return (
    <FormControl fullWidth>
      <Typography variant="h6">{label} </Typography>
      <TextField
        name={name}
        variant="outlined"
        defaultValue={value}
        onChange={(e) => handleChange(e)}
        {...rest}
      />
    </FormControl>
  );
};
