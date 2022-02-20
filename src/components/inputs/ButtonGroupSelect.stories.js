import React, { useState } from "react";
import { ButtonGroupSelect } from "./ButtonGroupSelect";

const initOptions = ["option1", "option2", "option3", "option4"];

export default {
  title: "Input/ButtonGroupSelect",
  component: ButtonGroupSelect,
  argTypes: {
    value: {
      control: {
        type: "inline-radio",
        options: initOptions,
      },
    },
  },
  args: {
    value: initOptions[0],
    options: initOptions,
  },
};

export const Default = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <ButtonGroupSelect
      {...args}
      label="default selector"
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const CustomOptionLabel = (args) => {
  const [value, setValue] = useState(args.value);
  const options = [
    { label: "option1", value: "option1" },
    { label: "Custom Label 2", value: "2" },
    { label: <div>html label</div>, value: "3" },
    { label: <div>html</div>, value: "4" },
  ];

  return (
    <ButtonGroupSelect
      {...args}
      options={options}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const MutipleSelector = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <ButtonGroupSelect
      {...args}
      multiple
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};
