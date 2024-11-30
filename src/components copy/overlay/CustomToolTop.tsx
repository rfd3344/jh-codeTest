import React from 'react';
import {
  Tooltip as TooltipMui,
} from '@mui/material';


import { HelpOutlineIcon } from 'src/core/icons';

interface IProps {
  title: React.ReactNode;
}

export default function CustomToolTop({
  title = ''
}: IProps) {
  return (
    <TooltipMui
      enterTouchDelay={0}
      title={title}
      placement="top"
      arrow
    // sx={{
    //   [`& .${tooltipClasses.arrow}`]: {
    //     // color: '#6a78efd1',
    //   },
    //   [`& .${tooltipClasses.tooltip}`]: {
    //     // background: '#edeffdd1',
    //     // border: '2px solid #6a78efd1',
    //     // color: '#000',
    //     // maxWidth: 300,
    //     // '& h5': {
    //     //   fontSize: '15px',
    //     //   marginBottom: '0',
    //     // },
    //     // '& p': {
    //     //   fontSize: '13px',
    //     // },
    //   },
    // }}
    >
      <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
    </TooltipMui>
  );
}