import { useState } from 'react';

import { TextFieldHookForm } from './TextFieldHookForm';

export default {
  title: 'Components/inputs/TextFieldHookForm',
  component: TextFieldHookForm,
  argTypes: {},
  args: {
    name: 'name',
    label: 'label',
    value: 'value',
  },
};

export const Default = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <TextFieldHookForm
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const NoDebounce = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <TextFieldHookForm
      {...args}
      value={value}
      debounce={false}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
