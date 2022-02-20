import React, { useState } from 'react';

import { CurrencySelector } from './CurrencySelector';

const options = ['AUD', 'USD'];

export default {
  title: 'CurrencySelector',
  component: CurrencySelector,
  argTypes: {},
  args: {
    value: 'AUD',
    label: 'label',
  },
};

export const Default = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <CurrencySelector
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};
