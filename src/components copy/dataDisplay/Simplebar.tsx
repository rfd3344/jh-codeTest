import React from 'react';
import _ from 'lodash';
import {
  Box,
} from '@mui/material';

import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


//

/**
 * Style native scrollbar
 * Check https://www.npmjs.com/package/simplebar-react#1-documentation
 *
 */
export default function Simplebar({
  ...rest
}: IProps) {


  return (
    <Box component={SimpleBarReact} {...rest} />
  );
}


interface IProps {
  [key: string]: any
};
