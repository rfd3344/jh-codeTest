import React, { useCallback, useEffect } from "react";

import { Controller } from "react-hook-form";
import { makeStyles, FormControl, TextField } from "@material-ui/core";
import _ from "lodash";
import { ReadOnlyField } from "./ReadOnlyField";

export function ControlledTextField({
  name, // required
  value = "",
  readOnly = false,
  onChange = (e) => {},
  formObj,
  label,
  ...rest
}) {
  if (readOnly) {
    return (
      <ReadOnlyField
        label={label || `${_.capitalize(_.startCase(name))}`}
        value={value || ""}
        {...rest}
      />
    );
  }

  const { control, errors } = formObj || {};
  if (!name) {
    console.error("ControlledTextField must have `name` prop");
    return null;
  }
  if (!formObj || !control) {
    return (
      <FormControl fullWidth>
        <TextField
          name={name}
          label={label || `${_.capitalize(_.startCase(name))}`}
          value={value || ""}
          variant="outlined"
          onChange={onChange}
          {...rest}
        />
      </FormControl>
    );
  }

  const handleChange = (e, props) => {
    props.onChange(e.target.value);
    onChange(e);
  };
  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        defaultValue={value || ""}
        render={(props) => (
          <TextField
            label={label || `${_.capitalize(_.startCase(name))}`}
            variant="outlined"
            value={value || ""}
            onChange={(e) => handleChange(e, props)}
            error={_.has(errors, name)}
            helperText={_.get(errors, `${name}.message`)}
            name={name}
            {...rest}
          />
        )}
      />
    </FormControl>
  );
}
