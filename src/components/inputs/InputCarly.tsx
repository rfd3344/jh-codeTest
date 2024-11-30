import React from 'react';
import _ from 'lodash';
import { TextField } from '@mui/material';

import FormContoller from './FormController';

/*********************************************************************
 *
 * @param formObj - data from react-hook-form
 * @param adaptor - process value, such as add a space for each 4 character, limit to maximum length
 * @param rules - check https://react-hook-form.com/docs/useform/register#options
 *
 *
 *
 */

export default function InputCarly({
  name,
  label,
  formObj,
  rules = {},
  value,
  adaptor,
  onChange = (value = '', name = '') => { },
  onBlur = (value = '', name = '') => { },
  sx,
  inputProps,
  children,
  ...rest
}: IProps) {

  const handleChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    // call format function
    if (adaptor) {
      const nextValue = adaptor(target.value);
      target.value = nextValue;
    }
    onChange(target.value, target.name);
  };

  const handleBlur = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    onBlur(target.value, target.name);
  };


  return (
    <FormContoller
      name={name}
      rules={rules}
      label={label}
      formObj={formObj}
      value={value}
      onChange={handleChange}
      render={({ errorMessage, label, ...field }: any) => (
        <TextField
          error={!!errorMessage}
          helperText={errorMessage}
          inputProps={{
            onBlur: handleBlur,
            ...inputProps,
          }}
          fullWidth
          children={children}
          sx={{
            '& .MuiInputBase-input': {
              py: label ? undefined : 2,
            },
            '& .MuiInputBase-root .MuiInputAdornment-root.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)': {
              mt: label ? undefined : 0,
            },
            ...sx,
          }}
          label={label}
          {...field}
          {...rest}
        />
      )}
    />

  );
}


interface IProps {
  name?: string;
  label?: React.ReactNode;
  adaptor?: (value: string) => string;
  formObj?: any;
  onChange?: (value: string, name: string) => void;
  onBlur?: (value: string, name: string) => void;
  sx?: any;
  inputProps?: any;
  children?: React.ReactNode,
  [key: string]: any;
}