import React, { useState, useEffect, useMemo } from 'react';
import _ from 'lodash';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Box,
  TablePagination,
  Paper,
} from '@mui/material';

import Simplebar from './Simplebar';

/***********************************************************
 * basic table
 * @arg columProps {Array}  [{ head: '', cell: row => row.data }]
 *  - head
 *  - cell: function for data display
 *  - align: can align columns, left/right/center
 *
 */
export default function TableBasic({
  columnProps = [],
  data = [],
  // sx,
  footer,
  rowsPerPage = 0,
  ...rest
}: IProps) {
  const [page, setPage] = useState(0);


  const pagedData = useMemo(() => {
    if (!rowsPerPage) return data;

    const endIndex = rowsPerPage * (page + 1);
    const startIndex = endIndex - rowsPerPage;
    return data?.slice(startIndex, endIndex);
  }, [rowsPerPage, data, page]);

  useEffect(() => {
    // check maximum page number
    if (data.length === 0) return setPage(0);

    const maxPageIndex = Math.ceil(data.length / rowsPerPage) - 1;
    if (page > maxPageIndex) setPage(maxPageIndex);
  }, [data, rowsPerPage])

  const handleChangePage = (e: unknown, page: number) => {
    setPage(page);
  };


  return (
    <TableContainer component={Paper} {...rest}>
      <Simplebar>

        <Table
          aria-label="simple table"
        >
          <TableHead sx={{ background: theme => theme.palette.common.lightPurple }}>
            <TableRow>
              {columnProps?.map((item: ColoumProps) => (
                <TableCell key={item.head} align={item.align as any}>
                  <Typography variant="body2" fontWeight="bold">
                    {item.head}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {!_.isEmpty(pagedData) && pagedData?.map((row: any, rowIndex: number) => (
              <TableRow key={rowIndex} hover>
                {columnProps.map((item: any, key: number) => (
                  <TableCell key={key} align={item.align}>
                    {_.isFunction(item.cell) ?
                      item.cell(row, rowIndex + rowsPerPage * page) :
                      item.cell
                    }
                  </TableCell>
                ))}
              </TableRow>
            ))}
            {_.isEmpty(pagedData) && <TableRow>
              <TableCell colSpan={5}>
                <Typography>There is no data to display. </Typography>
              </TableCell>
            </TableRow>}
          </TableBody>

        </Table>

      </Simplebar>
      <Box>
        {footer}
      </Box>
      {(rowsPerPage > 0 && data?.length > rowsPerPage) &&
        <TablePagination
          rowsPerPageOptions={[0]}
          component="div"
          count={data?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      }
    </TableContainer>
  );
}


interface IProps {
  columnProps: ColoumProps[];
  data: Obj[];
  // sx?: Obj;
  footer?: React.ReactNode;
  rowsPerPage?: number;
  // noPagination?: boolean,
  [key: string]: any
};



export type ColoumProps = {
  head: string;
  cell: string | Function;
  align?: string;
  // align?: 'left' | 'right' | 'center';
}