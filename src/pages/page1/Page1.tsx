import { useState, useEffect } from "react";
// import { Button, CircularProgress } from "@mui/material";

// import Button from '../../components/Button';

import Button from 'src/components/Button';
// import Button from 'components/Button';

// import Button from '@/components/Button';
// import Button from '@components/Button';


type Props = {
  name?: string;
  [x: string]: any
}


interface User {
  name: string;
  age: number;
}


export enum ButtonSizes {
  default = "default",
  small = "small",
  large = "large",
  '123 bbb'= '123 bbb'
}

const bbb: StringFormatOptions = {
  fancinessLevel: 1243
};

export default function Page1({
  name = '',
  ...rest
}: Props) {


  const [user, setUser] = useState<User | null>(null);
  const [buttonSize, setButtonSize] = useState(ButtonSizes.default);



  const handleClick = (e: React.SyntheticEvent) => {
    console.warn(user)
    const b: User = {
      name: 'a',
      age: 1
    }
    type UserField = keyof User;
    const cc: UserField = 'age'
    console.warn('aa', cc)
    if (b) {
      setUser({
        name: b?.name ? b.name + 'a' : 'b',
        age: b?.age ? b.age + 1 : 1,
      })
    } else {

    }

    setButtonSize(ButtonSizes['123 bbb'])

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
        <div>bbb.fancinessLevel: {bbb.fancinessLevel}</div>
        <div>buttonSize: {buttonSize}</div>
      </div>
    </div>
  );
};