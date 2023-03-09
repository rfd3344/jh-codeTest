import { useState, useEffect } from "react";
// import { Button, CircularProgress } from "@mui/material";



type Props = {
  [x: string]: any
}


export default function Button({
  // onClick = () => { },

  children,
  ...rest
}: Props) {


  return (
    <button
      {...rest}
    >
      {children}
    </button>
  );
};