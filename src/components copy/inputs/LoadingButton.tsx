import React from 'react';
import _ from 'lodash';
import { Button } from '@mui/material';

import { LoadingIcon } from 'src/core/icons';


/*********************************************************************
 *
 */

export default function LoadingButton({
  loading = false,
  disabled,
  ...rest
}: IProps) {


  return (
    <Button
      disabled={loading || disabled}
      startIcon={loading && <LoadingIcon size={20} color='inherit' />}
      {...rest}
    />

  );
}


interface IProps {
  loading: boolean,
  disabled?: boolean,
  [key: string]: any;
}