import _ from 'lodash';
import { useTheme } from '@mui/system';
import { alpha } from '@mui/material/styles';
import {
  Box,
  Chip as ChipMui,
} from '@mui/material';
// import type { PaletteColor, PaletteAugmentColorOptions } from '@mui/material/styles/createPalette';

interface IProps {
  value: string,
  valueMap?: Obj,
  sx?: Obj,
  [key: string]: any
}

export default function Chip({
  value = '',
  valueMap = {
    value: {
      color: '',
      content: '',
    },
  },
  sx,
  ...rest
}: IProps) {
  const theme = useTheme();

  const dataMap = valueMap[value] || {};
  const label = dataMap?.content || value;
  const color = _.get(theme.palette, dataMap.color) || theme.palette.primary.main;
  const colorBackground = alpha(color, 0.2);



  return (
    <ChipMui
      label={label}
      sx={{
        color: color,
        backgroundColor: colorBackground,
        ...sx,
      }}
      {...rest}
    />

  );

}