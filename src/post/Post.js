import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { LoadingIcon } from 'src/core/Icon';

import { getPosts } from './postSlice';

export const Post = () => {
  const dispatch = useDispatch();
  const { posts = [] } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (posts.length === 0) {
    return (
      <Box textAlign="center" pt={10}>
        <LoadingIcon />
      </Box>
    );
  }
  return (
    <Container component={Box} pt={2}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell align="right">{row.title}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
