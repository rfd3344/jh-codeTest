import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';

import { SwapIcon } from 'src/core/Icon';
import { CurrencySelector } from 'src/components/curreny/CurrencySelector';
import { InputField } from 'src/components/curreny/InputField';

import {
  updateConverter,
  getConversionRate,
} from './conversionCalculatorSlice';

const useStyles = makeStyles((theme) => ({
  swap: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export const CurrencyPanel = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { converter } = useSelector((state) => state.currencyConverter);

  const handleChange = (value) => {
    dispatch(updateConverter(value));
  };

  const handleSwap = () => {
    const nextBuy = converter.sell;
    dispatch(
      updateConverter({
        sell: converter.buy,
        buy: nextBuy,
      })
    );
  };

  useEffect(() => {
    dispatch(getConversionRate());
    const interval = setInterval(() => {
      dispatch(getConversionRate());
    }, 30000);
    return () => clearInterval(interval);
  }, [converter.buy, converter.sell, converter.amount]);

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item sm={4}>
        <InputField
          label="Amount"
          onChange={(e) => handleChange({ amount: e.target.value })}
        />
      </Grid>

      <Grid item sm={3}>
        <CurrencySelector
          label="From"
          value={converter.sell}
          onChange={(code) => handleChange({ sell: code })}
        />
      </Grid>

      <Grid item sm={1}>
        <Box textAlign="center">
          <SwapIcon
            fontSize="large"
            className={classes.swap}
            onClick={handleSwap}
          />
        </Box>
      </Grid>

      <Grid item sm={3}>
        <CurrencySelector
          label="To"
          value={converter.buy}
          onChange={(code) => handleChange({ buy: code })}
        />
      </Grid>
    </Grid>
  );
};
