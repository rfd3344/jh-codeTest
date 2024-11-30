import React, { forwardRef } from 'react';
import _ from 'lodash';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';
import { Box } from '@mui/material';

import { formatISO, parseISO } from 'src/utils/dateUtils';

import InputCarly from './InputCarly';


export default function DatePickerCarly({
  name = '',
  label,
  formObj = {},
  rules = {},
  onChange = (value = '', name = '') => { },
  monthPicker = false,
  // placeholder = 'dd/mm/yyyy',
  sx,
  disabled = false,
  textFieldProps,
  shortDate,
  ...rest
}: IProps) {
  const { control, errors } = formObj;

  const CustomInput = forwardRef(({ value, onClick, errors, onFocus, onBlur }: any, ref) => (
    <InputCarly
      inputRef={ref}
      onClick={onClick}
      name={name}
      label={label}
      inputProps={{ readOnly: true }}
      value={value}
      error={!!errors[name]}
      helperText={errors[name]?.message}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      {...textFieldProps}
    />
  ));

  if (!control) return null;

  return (
    <Box
      sx={{
        ...stylesOverride,
        ...sx,
      }}
    >
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field }) => (
          <ReactDatePicker
            selected={parseISO(field.value)}
            customInput={
              <CustomInput errors={errors} />
            }
            dropdownMode="select"
            showMonthDropdown
            showYearDropdown
            dateFormat={monthPicker ? 'MM/yyyy' : 'dd/MM/yyyy'}
            showMonthYearPicker={monthPicker}
            onBlur={field.onBlur}
            onChange={(value, e: React.SyntheticEvent) => {
              const dateStr = shortDate ? formatISO(value)?.split('T')[0] : formatISO(value);
              e.target.value = dateStr;

              field.onChange(e);
              onChange(dateStr, name);
            }}
            disabled={disabled}
            {...rest}
          />
        )}
      />
    </Box>
  );
}


const stylesOverride = {
  '& .react-datepicker-wrapper': {
    width: '100%',
  },
  '& .react-datepicker-popper': {
    zIndex: 10,
    '.react-datepicker__navigation': {
      top: 8,
    },
    '.react-datepicker__header': {
      backgroundColor: 'primary.light',
      '.react-datepicker__current-month--hasYearDropdown.react-datepicker__current-month--hasMonthDropdown': {
        display: 'none',
      },
      'select': {
        py: 0.5,
      },
    },
    '.react-datepicker__day--keyboard-selected, .react-datepicker__month-text--keyboard-selected, .react-datepicker__quarter-text--keyboard-selected, .react-datepicker__year-text--keyboard-selected': {
      backgroundColor: 'primary.main',
    },
    '.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range': {
      backgroundColor: 'primary.main',
    },
    '.react-datepicker__day--keyboard-selected': {
      color: 'white',
    },
    '.react-datepicker__month-text--keyboard-selected': {
      color: 'white',
    },
  },
};


interface IProps {
  name: string,
  label?: string,
  onChange?: (name: string, value: string) => void,
  monthPicker?: boolean,
  disabled?: false,
  // textFieldProps
  [key: string]: any
}