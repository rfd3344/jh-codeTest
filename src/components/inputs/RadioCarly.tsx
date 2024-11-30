import React from 'react';
import _ from 'lodash';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from '@mui/material';
import { Controller } from 'react-hook-form';

export default function RadioCarly({
  name = '',
  label,
  value,
  defaultValue,
  options = [],  // { label, value }
  formObj,
  rules = {},
  labelPlacement = 'end',
  onChange = (value = '', name = '') => { },
  ...rest
}: IProps) {


  const handleChange = (e: React.SyntheticEvent) => {
    const { value } = e.target;
    onChange(value, name);
  };

  const RadioControl = (field?: any) => (
    <FormControl {...rest}>
      {label && (<FormLabel>{label}</FormLabel>)}
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        name="radio-buttons-group"
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => { field?.onChange(e); handleChange(e); }}
      >
        {options.map((item: any) => (
          <FormControlLabel
            value={item.value}
            label={item.label}
            key={item.value}
            labelPlacement={labelPlacement}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
      <FormHelperText error={true}>{formObj?.errors[name]?.message}</FormHelperText>
    </FormControl>
  );

  if (formObj) return (
    <Controller
      name={name}
      rules={rules}
      control={formObj.control}
      render={({ field }) => (
        RadioControl(field)
      )}
    />
  );


  return (RadioControl());
}

interface IProps {
  name: string,
  label?: string,
  value?: string,
  defaultValue?: string,
  options?: Option[],  // { label, value }
  formObj?: Obj,
  rules?: Obj,
  onChange?: (value: string, name: string) => void,
  [key: string]: any;
}

type Option = {
  label: string,
  value: string,
}