
import React from 'react';
import {
  Grid,
  Typography,
  IconButton,
  DialogTitle,
  DialogContent,
  Dialog as DialogMui,
} from '@mui/material';

import { CloseIcon } from 'src/core/icons';

/*******
 * popup dialog modal
 * @params size - max width: xs, sm, md, lg, xl
 * @params {Boolean}
 *
 */
export default function Dialog({
  title = '',
  size = 'md',
  headerSize = 'h5',
  open = false,
  onClose = null,
  children,
  sx,
  ...rest
}: any) {

  return (
    <DialogMui
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth={size}
      sx={{
        '& .MuiDialog-paper': {
          m: 2,
          // maxeight
          width: '100%',
          ...sx,
        },
      }}
      {...rest}
    >
      <DialogTitle>
        <Grid container justifyContent="space-between" wrap="nowrap" alignItems="center">
          <Grid item my={1}>
            <Typography variant={headerSize} sx={{ fontWeight: 'bold' }}>{title}</Typography>
          </Grid>
          <Grid item>

            {onClose && (
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            )}
          </Grid>
        </Grid>

      </DialogTitle>
      <DialogContent
        sx={{
          overflow: 'visible',
        }}
      >
        {children}
      </DialogContent>
    </DialogMui>
  );
}
