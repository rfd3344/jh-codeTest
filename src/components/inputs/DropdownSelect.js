import React, { useCallback, useEffect, useState } from "react";
import produce from "immer";
import _ from "lodash";

import {
  makeStyles,
  Box,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { ReadOnlyField } from "./ReadOnlyField";

export function DropdownSelect({
  name,
  options = [],
  value = "",
  onChange = (value) => {},
  multiple = false,
  readOnly = false,
  ...rest
}) {
  if (readOnly) {
    return <ReadOnlyField label={name} value={value} />;
  }

  const optionsMap = options.map((option) => {
    if (typeof option === "string") {
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
        multiple={multiple}
        variant="outlined"
        value={convertedValue || ""}
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
