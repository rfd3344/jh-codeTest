

import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import {
  Box,
  Typography,
  Accordion as AccordionMui,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';

import { ExpandMoreIcon } from 'src/core/icons';


export default function Accordion({
  defaultExpandIndex,
  data = [], // [{summary,details }]
  onChange = (index = 0) => { },
  ...rest
}: any) {


  const [expandIndex, setExpandIndex] = useState(defaultExpandIndex);

  useEffect(() => {
    setExpandIndex(defaultExpandIndex);
  }, [defaultExpandIndex]);

  const handleChange = (index = 0) => (e: React.SyntheticEvent, isExpanded = false) => {
    setExpandIndex(isExpanded ? index : false);
    onChange(index);
  };

  return (
    <Box {...rest}>
      {data?.map((item: Obj, key = 0) => {
        if (!item) return null;
        return (
          <AccordionMui
            key={key}
            expanded={expandIndex === key}
            onChange={handleChange(key)}
            disableGutters
            sx={[{
              '&.Mui-disabled': {
                backgroundColor: 'white',
              },
              border: '1px solid',
              borderColor: 'primary.main',
              // boxShadow: 'none',
            },
              // isColored && {
              //   boxShadow: 'none',
              //   '&:before': {
              //     // backgroundColor: 'primary',
              //   },
              //   // backgroundColor: theme => expandIndex === key ? theme.palette.common.blue
              //   //   : theme.palette.common.secondaryPurple,
              //   // '& .MuiAccordionDetails-root': {
              //   //   backgroundColor: theme => theme.palette.common.lightGrey,
              //   // },
              // }
            ]}
            {...item?.accordionProps}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="primary" />}
            >
              {_.isString(item.summary) && (
                <Typography pl={1} fontWeight="bold">
                  {item.summary}
                </Typography>
              )}
              {!_.isString(item.summary) && item.summary}

            </AccordionSummary>
            <AccordionDetails sx={{ pl: 4, pt: 2 }}>
              {item.details}
            </AccordionDetails>

          </AccordionMui>
        );
      })}


    </Box>
  );
}