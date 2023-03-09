import { useState, useEffect } from "react";
// import { Button, CircularProgress } from "@mui/material";

// import Button from '../../components/Button';

import Button from 'src/components/Button';
// import Button from 'components/Button';

// import Button from '@/components/Button';
// import Button from '@components/Button';


type Props = {
  [x: string]: any
}


interface User {
  name: string;
  age: number;
}

interface Button {
  name: string;
  size: number;
}

export declare type Position = "left" | "right" | "top" | "bottom";

export enum ButtonSizes {
  default = "default",
  small = "small",
  large = "large",
}


export default function Page1({
  ...rest
}: Props) {

  const bbb: StringFormatOptions = {
    fancinessLevel: 1243
  };

  // const c: NumberString = 11
  const c = 11


  // const b = ButtonSizes.default;
  // console.warn('b', b)
  const [buttonSize, setButtonSize] = useState(ButtonSizes.default);

  const [user, setUser] = useState<User | null>(null);


  const handleClick = (e: React.SyntheticEvent) => {
    console.warn(user)
    setUser({
      name: user?.name ? user.name + 'a' : 'b',
      age: user?.age ? user.age + 1 : 1,
    })
    setButtonSize(ButtonSizes.large)

  }

  return (
    <div
      {...rest}
    >
      <div>
        user.name {user?.name}
        user.age: {user?.age}

      </div>
      <Button onClick={handleClick}>
        add Name
      </Button>
      <Button onClick={(e: React.SyntheticEvent) => setUser(null)}>
        clear
      </Button>
      <div>
        Position:
        {bbb.fancinessLevel}
        {buttonSize}
        <div>{c}</div>
      </div>
    </div>
  );
};