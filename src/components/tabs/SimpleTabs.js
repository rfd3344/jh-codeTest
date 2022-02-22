import React, { useState } from 'react';
import { styled, Box, Tabs, Tab } from '@mui/material';
const a11yProps = (index) => ({
  id: `tab-${index}`,
  'aria-controls': `tab-${index}`,
});

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      style={{ flexGrow: 1 }}
    >
      {/* {value === index && <>{children}</>} */}
      {children}
    </div>
  );
};

const TabsStlyed = styled(Tabs)({
  background: 'white',
  minHeight: '64px',
});

export const SimpleTabs = ({ tabs = [], ...rest }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChangeTab = (e, tabIndex) => {
    setTabIndex(tabIndex);
  };

  return (
    <Box display="flex" flexDirection="column" height="100%" {...rest}>
      <TabsStlyed
        id="tabs"
        value={tabIndex}
        onChange={handleChangeTab}
        indicatorColor="secondary"
        textColor="primary"
      >
        {tabs.map((tab, index) => (
          <Tab label={tab.label} {...a11yProps(index)} key={index} />
        ))}
      </TabsStlyed>
      {tabs.map((tab, index) => (
        <TabPanel value={tabIndex} index={index} key={index}>
          {tab.panel}
        </TabPanel>
      ))}
    </Box>
  );
};
