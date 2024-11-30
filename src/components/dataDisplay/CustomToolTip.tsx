import React from 'react';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

import { HelpOutlineIcon } from 'src/core/icons';

const CustomToolTip = ({ title, ...rest }: any) => (
  <Tooltip
    enterTouchDelay={0}
    title={title}
    placement="top"
    arrow
    sx={{
      [`& .${tooltipClasses.arrow}`]: {
        // color: '#6a78efd1',
      },
      [`& .${tooltipClasses.tooltip}`]: {
        // background: '#edeffdd1',
        // border: '2px solid #6a78efd1',
        // color: '#000',
        // maxWidth: 300,
        // '& h5': {
        //   fontSize: '15px',
        //   marginBottom: '0',
        // },
        // '& p': {
        //   fontSize: '13px',
        // },
      },
    }}
    {...rest}
  >
    <HelpOutlineIcon sx={{cursor: 'pointer'}} />
  </Tooltip>
);

export default CustomToolTip;
