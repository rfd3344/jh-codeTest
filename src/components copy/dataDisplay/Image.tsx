
import {
  Box,
} from '@mui/material';


export default function Image({
  ...rest
}: any) {

  return <Box
    component="img"
    alt=""
    {...rest}
  />;

}