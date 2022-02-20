import React, { useState } from "react";
import { DropdownSelect } from "./DropdownSelect";

const initOptions = ["option1", "option2", "option3", "option4"];

export default {
  title: "Input/DropdownSelect",
  component: DropdownSelect,
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
    <DropdownSelect
      {...args}
      name="dropdown name"
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const CustomLabel = (args) => {
  const [value, setValue] = useState(args.value);
  const options = [
    { label: "option1", value: "option1" },
    { label: "Custom Label 2", value: "2" },
    { label: <div>html label</div>, value: "3" },
    { label: <div>html</div>, value: "4" },
  ];

  return (
    <DropdownSelect
      {...args}
      options={options}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const AdditionSelectProps = (args) => {
  const [value, setValue] = useState(args.value);
  return (
    <DropdownSelect
      {...args}
      color="primary"
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

export const MutipleSelect = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <DropdownSelect
      {...args}
      multiple
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

// export const EditableSelect = (args) => {
//   const [value, setValue] = useState(args.value);

//   return (
//     <DropdownSelect
//       {...args}
//       editable
//       value={value}
//       onChange={(newValue) => setValue(newValue)}
//     />
//   );
// };

// export const EditableMultipleSelect = (args) => {
//   const [value, setValue] = useState(args.value);

//   return (
//     <DropdownSelect
//       {...args}
//       multiple
//       editable
//       value={value}
//       onChange={(newValue) => setValue(newValue)}
//     />
//   );
// };

// export const PredefinedOnlySelect = (args) => {
//   const [value, setValue] = useState(args.value);

//   return (
//     <DropdownSelect
//       {...args}
//       editable
//       predefinedOnly
//       value={value}
//       onChange={(newValue) => setValue(newValue)}
//     />
//   );
// };
