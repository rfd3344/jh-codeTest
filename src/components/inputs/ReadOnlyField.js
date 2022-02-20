import React from "react";

import { makeStyles, TextField, FormControl } from "@material-ui/core";

export function ReadOnlyField({ label, value = "", ...rest }) {
  return (
    <FormControl fullWidth>
      <TextField
        label={label}
        value={value}
        InputProps={{
          style: {
            background: "lightgray",
          },
        }}
        inputProps={{
          disabled: true,
        }}
        {...rest}
      />
    </FormControl>
  );

  // return (
  //   <Box {...rest}>
  //     <Typography color="textSecondary" variant="subtitle1">
  //       {name}
  //     </Typography>
  //     <Typography>{value}</Typography>
  //   </Box>
  // );
}
