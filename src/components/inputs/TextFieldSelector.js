import React, { useCallback, useEffect, useState } from "react";

import { Controller } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@material-ui/core";
import _ from "lodash";

export function TextFieldSelector({
  name, // reqiured
  options = [], // required
  label,
  value = "",
  onChange = (value) => {},
  ...rest
}) {
  // const [value, setValue] = useState(
  //   _.isUndefined(value) ? options[0]?.value : defaultValue
  // );
  const handleChange = (e) => {
    // setValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    <FormControl fullWidth>
      <TextField
        select
        SelectProps={{
          displayEmpty: true,
        }}
        label={label || `${_.capitalize(_.startCase(name))}`}
        variant="outlined"
        value={value ? value : options[0].value}
        onChange={handleChange}
        {...rest}
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
}
