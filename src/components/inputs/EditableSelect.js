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
import { Autocomplete } from "@material-ui/lab";
import { ReadOnlyField } from "./ReadOnlyField";

export function EditableSelect({
  name,
  options = [],
  value = "",
  readOnly = false,
  onChange = (value) => {},
  ...rest
}) {
  if (readOnly) {
    return <ReadOnlyField label={name} value={value} />;
  }

  const classes = makeStyles((theme) => ({
    autocomplete: {
      "& .MuiInputBase-root": {
        padding: "12px 32px 12px 14px",
      },
      "& .MuiInputBase-root .MuiInputBase-input": {
        padding: 0,
      },
    },
    popper: {
      "& .MuiPaper-root": {
        boxShadow:
          "0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
      },
    },
  }))();

  // const optionList = options.map((option) => {
  //   if (option.label) {
  //     return { label: option, value: option };
  //   } else {
  //     return option;
  //   }
  // });
  // const convertedValue = _.isString(value) ? [value] : value;

  const handleInputChange = (e, newOptions, reason) => {
    if (reason === "input") {
      onChange(newOptions);
    }
  };

  const handleChange = (e, newOptions, reason) => {
    onChange(newOptions);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{name}</InputLabel>
      <Autocomplete
        classes={{ root: classes.autocomplete, popper: classes.popper }}
        freeSolo
        // multiple // ={multiple}
        options={options}
        // getOptionLabel={(value) => {

        //   // const label = _.find(optionsMap, { value })?.label;
        //   console.warn("value", value);
        //   // return label || value;
        //   return value
        // }}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
        value={value}
        onInputChange={handleInputChange}
        onChange={handleChange}
        {...rest}
      />
    </FormControl>
  );
}
