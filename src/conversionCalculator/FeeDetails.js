import { useSelector } from 'react-redux';
import { Box, Typography, Paper } from '@mui/material';

import { LoadingIcon } from 'src/core/Icon';
import { currenyCode, toCurrency } from 'src/utils/currencyUtils';

export const FeeDetails = () => {
  const {
    sell,
    buy,
    rateBase,
    rateMakeup,
    amount,
    amountMakeup,
    amountFinal,
    loading,
  } = useSelector((state) => state.currencyConverter.converter);

  if (loading)
    return (
      <Paper component={Box} mt={2} p={3} textAlign="center">
        <LoadingIcon />
      </Paper>
    );

  return (
    <Box mt={2}>
      <Paper component={Box} p={1}>
        <Box textAlign="center">
          <Typography variant="h5">Conversion Details</Typography>
        </Box>
        <Box>
          <Typography variant="h6">
            {toCurrency(amount, sell)} {currenyCode[sell]} =
          </Typography>
          <Typography variant="h5">
            {toCurrency(amountFinal, buy)} {currenyCode[buy]}
          </Typography>
        </Box>

        <Box mt={2}>
          Paytron takes in mark-up: {toCurrency(amountMakeup, buy)}
          {currenyCode[buy]}
        </Box>
        <Box>
          base rate: 1{sell} = {rateBase} {buy}
        </Box>
        <Box>
          Paytron rate: 1 {sell} = {rateMakeup} {buy}
        </Box>
      </Paper>
    </Box>
  );
};
