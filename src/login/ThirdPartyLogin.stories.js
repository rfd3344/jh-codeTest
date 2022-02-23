import { useState } from 'react';

import { ThirdPartyLogin } from './ThirdPartyLogin';

export default {
  title: 'Login/ThirdPartyLogin',
  component: ThirdPartyLogin,
  argTypes: {},
  args: {},
};

export const Default = (args) => {
  return <ThirdPartyLogin />;
};
