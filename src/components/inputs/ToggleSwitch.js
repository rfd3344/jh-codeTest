import React, { useCallback, useEffect, useState } from "react";
import produce from "immer";
import _ from "lodash";

import { FormControl, FormControlLabel, Switch } from "@material-ui/core";

export function ToggleSwitch({
  label,
  value = "",
  onChange = (isChecked) => {},
  labelPlacement = "end", // top, bottom, start, end
  noFullWidth = false,
  ...rest
}) {
  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <FormControl fullWidth={!noFullWidth}>
      <FormControlLabel
        control={<Switch checked={!!value} onChange={handleChange} {...rest} />}
        label={label}
        labelPlacement={labelPlacement}
      />
    </FormControl>
  );
}
