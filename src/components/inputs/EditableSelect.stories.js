import React, { useState } from "react";
import { EditableSelect } from "./EditableSelect";

const initOptions = ["option1", "option2", "option3", "option4"];

export default {
  title: "Input/EditableSelect",
  component: EditableSelect,
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
    <EditableSelect
      {...args}
      name="editable select name"
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};
