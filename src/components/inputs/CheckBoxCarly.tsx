import React, { useState, useRef, useEffect } from 'react';
import _ from 'lodash';
import {
  Box,
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormHelperText,
  Typography,
} from '@mui/material';
import { Controller } from 'react-hook-form';



/***
 *
 * @param label
 *
 */
export default function CheckBoxCarly({
  name = '',
  label = '',
  value = false,
  disabled = false,
  size = 'medium',
  color = 'success',
  formObj = {},
  rules = {},
  checkProps = {},
  onChange = (value = false, name = '') => { },
  ...rest
}: IProps) {

  const {
    errors,
    control,
  }: any = formObj;
  const displayLabel = label || _.startCase(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(!!e.target.checked, name);
  };


  const checkboxProps: CheckboxProps = {
    color,
    size,
    disabled,
    sx: {
      color: 'gray',
      '& .MuiSvgIcon-root': {
        flexBasis: 'auto',
      },

    },
    onChange: handleChange,
    checked: value,
    ...checkProps,
  };

  if (!control) return (
    <Box {...rest}>
      <FormControlLabel
        label={<Typography variant="body2"> {displayLabel}  </Typography>}
        sx={{
          mb: 0,
        }}
        control={<Checkbox
          {...checkboxProps}
        />}
      />
    </Box>
  );


  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <Box {...rest}>
          <FormControlLabel
            label={displayLabel}
            sx={{
              mb: 0,
            }}
            control={<Checkbox
              {...checkboxProps}
              onChange={e => {
                checkboxProps?.onChange && checkboxProps?.onChange(e, value);
                field.onChange(e);
              }}
            />}
          />

          {
            errors[name] && (<FormHelperText error={true} sx={{ ml: 1 }} >
              {errors[name]?.message}
            </FormHelperText>)
          }



        </Box>
      )}
    />
  );
}

interface IProps {
  name?: string,
  label: string | React.ReactElement,
  value: boolean,
  size?: 'small' | 'medium',
  onChange: (value: boolean, name: string) => void,
  color?: string,
  [key: string]: any
}