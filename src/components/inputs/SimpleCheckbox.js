import React from "react";

import { FormControl, FormControlLabel, Checkbox } from "@material-ui/core";

export function SimpleCheckbox({
  label = "",
  value = "",
  onChange = (value) => {},
  ...rest
}) {
  return (
    <FormControl fullWidth>
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            {...rest}
          />
        }
      />
    </FormControl>
  );
}
