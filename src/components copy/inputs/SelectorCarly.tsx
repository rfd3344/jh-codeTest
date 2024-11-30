import React from 'react';
import _ from 'lodash';
import {
  MenuItem,
  Box,
} from '@mui/material';

import InputCarly from './InputCarly';

/*********************************************************************
 * @param options - [{ label: 'label1', value: 'value1' }]
 * @param formObj - data from react-hook-form
 * @param rules - check https://react-hook-form.com/api/useform/register/
 *
 *
 *
 */

export default function SelectorCarly({
  options = [],
  name = '',
  label,
  formObj,
  rules = {},
  onChange = (value = '', name = '') => { },
  sx,
  height,
  selectProps,
  dividerAt = null,
  ...rest
}: IProps) {

  return (
    <InputCarly
      select
      placeholder="Select"
      name={name}
      label={label}
      formObj={formObj}
      rules={rules}
      onChange={onChange}
      defaultValue=""
      SelectProps={{
        MenuProps: {
          sx: {
            height: height ? height : '400px',
            // [`& .MuiMenuItem-root:nth-child(${dividerAt})`]: {
            //   borderBottom: (theme: any) => `1px dashed ${theme.palette.common.jackyJacarnda}`,
            // },
          },
        },
        ...selectProps,
      }}
      sx={{
        // '& .Mui-focused input': {
        //   top: 0,
        //   opacity: 1,
        //   border: 0,
        //   fontSize: 'inherit',
        //   pl: 2,
        // },
        ...sx,
      }}
      {...rest}
    >
      <MenuItem disabled value="">Select</MenuItem>
      {options.map((item: Obj, key: number) => (
        <MenuItem
          key={key}
          value={item.value}
          disabled={item.disabled}
          sx={{
            borderBottom: (theme: any) => key === dividerAt ? `1px dashed ${theme.palette.common.purple}` : '',
          }}
        >
          {item.label}
        </MenuItem>
      ))}
    </InputCarly>
  );
}


// options = [],
// name = '',
// label,
// formObj,
// rules = {},
// onChange = (value = '', name = '') => { },
// sx,
// height,
// selectProps,
// dividerAt = null,


interface IProps {
  name: string,
  label?: string,
  value?: string,
  height?: number,
  dividerAt?: number | null,
  options?: Option[],  // { label, value }
  formObj?: Obj,
  rules?: Obj,
  onChange?: (value: string, name: string) => void,
  [key: string]: any;
}

type Option = {
  label: string,
  value: string | number ,
}