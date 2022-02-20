import _ from 'lodash';
import { FormControl, Typography, Select, MenuItem } from '@mui/material';

import { FlagIcon } from 'src/core/Icon';
import { currenyCode } from 'src/utils/currencyUtils';

const options = _.map(currenyCode, (value, key) => {
  return {
    key,
    label: (
      <>
        <FlagIcon currency={key} /> &nbsp; {value}
      </>
    ),
  };
});

export function CurrencySelector({
  label = '',
  value = '',
  onChange = (code) => {},
  ...rest
}) {
  return (
    <FormControl fullWidth>
      <Typography variant="h6">{label} </Typography>
      <Select
        variant="outlined"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      >
        {options.map((option) => (
          <MenuItem key={option.key} value={option.key}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
