import React, { useState } from 'react';

import { InputField } from './InputField';

export default {
  title: 'InputField',
  component: InputField,
  argTypes: {},
  args: {
    value: 'AUD',
    label: 'label',
  },
};

export const Default = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <InputField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const NoDebounce = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <InputField
      {...args}
      value={value}
      debounce={false}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
