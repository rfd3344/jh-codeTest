import React from "react";
import _ from "lodash";
import produce from "immer";
import {
  Box,
  FormControl,
  ButtonGroup,
  Button,
  InputLabel,
} from "@material-ui/core";

// ToggleButtonGroup does not exist in material-ui v4
export function ButtonGroupSelect({
  name = "",
  options = [],
  value = "",
  onChange = (value) => {},
  multiple = false,
  ...rest
}) {
  const optionsMap = options.map((option) => {
    if (typeof option === "string") {
      return { label: option, value: option };
    } else {
      return option;
    }
  });
  const selectedOptions = _.isArray(value) ? value : [value];

  const handleChange = (newValue) => {
    if (!multiple) {
      onChange(newValue);
      return;
    }

    if (!_.isArray(selectedOptions)) return;

    const nextValue = produce(selectedOptions, (draft) => {
      if (_.includes(draft, newValue)) {
        _.pull(draft, newValue);
      } else {
        draft.push(newValue);
      }
    });

    onChange(nextValue);
  };

  return (
    <Box {...rest}>
      <FormControl fullWidth>
        <InputLabel>{name}</InputLabel>
        <ButtonGroup variant="contained">
          {optionsMap.map((option) => (
            <Button
              key={option.value}
              color={_.includes(selectedOptions, option.value) && "secondary"}
              value={option.value}
              onClick={handleChange.bind(null, option.value)}
            >
              {option.label}
            </Button>
          ))}
        </ButtonGroup>
      </FormControl>
    </Box>
  );
}
