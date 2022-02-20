import { SwapHoriz } from '@mui/icons-material';
import CurrencyFlag from 'react-currency-flags';

import { CircularProgress } from '@mui/material';

export const SwapIcon = SwapHoriz;

export const LoadingIcon = CircularProgress;

export const FlagIcon = ({ size = 'md', ...rest }) => (
  <CurrencyFlag size={size} {...rest} />
);
