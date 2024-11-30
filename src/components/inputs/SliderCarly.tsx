// import React from 'react';
// import _ from 'lodash';
// // import { useController } from "react-hook-form";
// import { Controller } from 'react-hook-form';
// import { TextField } from '@mui/material';

// import FormContoller from './FormController';

// /*********************************************************************
//  *
//  * @param formObj - data from react-hook-form
//  * @param adaptor - process value, such as add a space for each 4 character, limit to maximum length
//  * @param rules - check https://react-hook-form.com/docs/useform/register#options
//  *
//  *
//  *
//  */

// export default function SliderCarly({
//   name,
//   label,
//   formObj,
//   rules = {},
//   value,
//   sx,
//   inputProps,
//   children,
//   ...rest
// }: IProps) {

//   const handleChange = (e: React.SyntheticEvent) => {
//     // call format function
//     if (adaptor) {
//       const nextValue = adaptor(e.target.value);
//       e.target.value = nextValue;
//     }
//     const { name, value } = e.target;
//     onChange(value, name);
//   };

//   const handleBlur = (e: React.SyntheticEvent) => {
//     const { name, value } = e.target;
//     onBlur(value, name);
//   };


//   return (
//     <FormContoller
//       name={name}
//       rules={rules}
//       label={label}
//       formObj={formObj}
//       value={value}
//       onChange={handleChange}
//       render={({ errorMessage, label, ...field }: any) => (
//         <TextField
//           error={!!errorMessage}
//           helperText={errorMessage}
//           inputProps={{
//             onBlur: handleBlur,
//             ...inputProps,
//           }}
//           fullWidth
//           children={children}
//           sx={{
//             '& .MuiInputBase-input': {
//               py: label ? undefined : 2,
//             },
//             '& .MuiInputBase-root .MuiInputAdornment-root.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)': {
//               mt: label ? undefined : 0,
//             },
//             ...sx,
//           }}
//           label={label}
//           {...field}
//           {...rest}
//         />
//       )}
//     />

//   );
// }


// interface IProps {
//   name?: string;
//   label?: React.ReactNode;
//   adaptor?: (value: string) => string;
//   formObj?: any;
//   onChange?: (value: string, name: string) => void;
//   onBlur?: (value: string, name: string) => void;
//   sx?: any;
//   inputProps?: any;
//   children?: React.ReactNode,
//   [key: string]: any;
// }