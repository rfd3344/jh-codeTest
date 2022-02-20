import _ from 'lodash';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';


export function DropdownSelect({
  name,
  options = [],
  value = '',
  onChange = (value) => {},
  ...rest
}) {


  const optionsMap = options.map((option) => {
    if (typeof option === 'string') {
      return { label: option, value: option };
    } else {
      return option;
    }
  });
  const convertedValue =
    _.isString(value) && !_.isEmpty(value) ? [value] : value;

  return (
    <FormControl fullWidth>
      <InputLabel> {name}</InputLabel>
      <Select
        variant="outlined"
        value={convertedValue || ''}
        onChange={(e) => onChange(e.target.value)}
        {...rest}
      >
        {optionsMap.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label || <>&nbsp;</>}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
