import React, { useState, useEffect, useMemo } from 'react';
import _ from 'lodash';
import {
  Box,
  Tabs,
  Tab,
  Card,
  InputAdornment,
  // TextField,
} from '@mui/material';

import TableBasic from './TableBasic';
import { ColoumProps } from './TableBasic';
import InputCarly from 'src/components/inputs/InputCarly';
import { SearchIcon } from 'src/core/icons';
/***********************************************************
 * basic table with filters
 * @arg columProps {Array}  [{ head: '', cell: row => row.data }]
 *  - head
 *  - cell: function for data display
 *  - align: can align columns, left/right/center
 *
 */
export default function TableFilter({
  columnProps,
  data = [],
  // sx,
  footer,
  rowsPerPage = 0,
  tabs, // [{label: 'All', value: ''}]
  tabField = '',
  searchFields = [],
  // onSearch = (value: string) => { },
  ...rest
}: IProps) {
  const [selectTab, setSelectTab] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleTabChange = (_e: any, value = '') => {
    setSelectTab(value);

  };
  const handleSearch = (value = '') => {
    setSearchText(value);
  };

  const filterData = () => {
    const tabsData = (() => {
      if (!tabs || selectTab === '') return data;
      return _.filter(data, item => item[tabField] === selectTab);
    })();

    if (_.isEmpty(searchFields)) return tabsData;

    const searchTextUpper = _.toUpper(searchText);
    const res = _.filter(tabsData, rowData => {

      const rowTexts = _.map(searchFields, searchField => rowData[searchField]);
      const textUpper = _.toUpper(rowTexts as any);

      return _.includes(textUpper, searchTextUpper);
    });

    return res;
  };

  return (
    <Card>
      {tabs && (
        <Tabs
          scrollButtons="auto"
          value={selectTab}
          sx={{ px: 3 }}
          onChange={handleTabChange}
        >
          {tabs?.map((tab: any) => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </Tabs>
      )}

      <Box p={2}>
        <InputCarly
          name="search"
          label=""
          size="small"
          placeholder='Search'
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
          }}
          onChange={handleSearch}
        />
      </Box>

      <TableBasic
        columnProps={columnProps}
        data={filterData()}
        footer={footer}
        rowsPerPage={rowsPerPage}
        {...rest}
      />
    </Card>

  );
}


interface IProps {
  columnProps: ColoumProps[];
  data: Obj[];
  // sx?: Obj;
  footer?: React.ReactNode;
  rowsPerPage?: number;
  [key: string]: any
};
