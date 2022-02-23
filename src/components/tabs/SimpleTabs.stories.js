import React from 'react';
import { SimpleTabs } from './SimpleTabs';

const tabs = [
  { label: 'tab1', panel: <div>panel1</div> },
  { label: 'tab2', panel: <div>panel2</div> },
  { label: 'tab3', panel: <div>panel3</div> },
];

export default {
  title: 'Components/Tabs/SimpleTabs',
  component: SimpleTabs,
  args: {
    tabs,
  },
};

export const Default = (args) => <SimpleTabs {...args} />;
