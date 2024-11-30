import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import {
  Box,
  MenuItem,
  Paper,
  Grid,
  InputAdornment,
} from '@mui/material';

import { useDispatch } from 'react-redux';

import {
  PlacesAutocomplete,
  geocodeByAddress,
  Suggestion
} from 'src/utils/placeUtils';

import InputCarly from './InputCarly';
import SelectorCarly from './SelectorCarly';

import { numberOnly } from 'src/utils/formUtils';
import { getKeyValueOptions } from 'src/utils/formUtils';
import { AustraliaState } from 'src/constants/userConst';

import CustomToolTip from '../dataDisplay/CustomToolTip';

import { updateCustomerDetails } from 'src/pages/dealerTools/dealertoolsSlice';

/******
 * Text field component
 * use `geocodeByAddress` to break address
 * @param name
 * @param label
 * @param {Function} format  - format value, check formUtils.js
 * @param formObj - react-hook-form object: {register, errors}
 * @param onChange - handle value change event (name, value) => {}
 *
 */
export default function AddressInput({
  // name = "",
  label = '',
  defaultValue = '',
  formObj = {} as any,
  form = {} as any,
  onChange = (addressObj: {}) => { },
  onBlur = (value: any, name: string) => { },
  noAddressOnSubmit = false,
}) {
  const dispatch = useDispatch();
  const [address, setAddress] = useState(defaultValue);
  const [noResult, setNoResult] = useState(false);
  const [isManual, setIsManual] = useState(false);
  const [missingAddress, setMissingAddress] = useState(noAddressOnSubmit);

  const fieldNames = [
    'streetNo',
    'streetName',
    'suburb',
    'state',
    'country',
    'postcode',
  ];

  useEffect(() => {
    setAddress(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setMissingAddress(noAddressOnSubmit);
  }, [noAddressOnSubmit]);

  useEffect(() => {
    if (isManual) {
      _.forEach(fieldNames, (field) => {
        dispatch(updateCustomerDetails({
          [field]: '',
        }));
      });
    } else if (missingAddress) {
      form?.trigger(fieldNames);
    }
  }, [missingAddress, isManual]);


  if (isManual || missingAddress) {
    return (
      <>
        <Grid item sm={2}>
          <InputCarly
            name="unitNo"
            label="Unit Number"
            formObj={formObj}
            onBlur={onBlur}
          />
        </Grid>
        <Grid item sm={2}>
          <InputCarly
            name="streetNo"
            label="Street Number"
            rules={{ required: 'Please enter your Street Number' }}
            formObj={formObj}
            onBlur={onBlur}
          />

        </Grid>
        <Grid item sm={4}>
          <InputCarly
            name="streetName"
            formObj={formObj}
            rules={{ required: 'Please enter your Street Name' }}
            onBlur={onBlur}
          />
        </Grid>
        <Grid item sm={4}>
          <InputCarly
            name="suburb"
            formObj={formObj}
            rules={{ required: 'Please enter your Suburb' }}
            onBlur={onBlur}
          />
        </Grid>
        <Grid item sm={3}>
          <SelectorCarly
            name="state"
            options={getKeyValueOptions(AustraliaState)}
            formObj={formObj}
            rules={{ required: 'State is a required field' }}
            onBlur={onBlur}
          />
        </Grid>
        <Grid item sm={3}>
          <InputCarly
            name="postcode"
            formObj={formObj}
            adaptor={numberOnly}
            inputProps={{ maxLength: 4 }}
            rules={{ required: 'Please enter your Postcode' }}
            onBlur={onBlur}
          />
        </Grid>
        <Grid item sm={3}>
          <SelectorCarly
            name="country"
            options={[
              { label: 'Australia', value: 'australia' },
            ]}
            formObj={formObj}
            rules={{ required: 'Country is required' }}
            onBlur={onBlur}
          />
        </Grid>
      </>
    );
  }

  const handleChange = (value: string) => {
    setAddress(value);
    setNoResult(false);
  };


  const handleSelect = async (value: string) => {
    if (value === 'isManual') {
      setIsManual(true);
      return;
    }


    const addressGoogle = await geocodeByAddress(value).catch((e) => { });

    const addressShortname: any = _.reduce(
      addressGoogle?.[0]?.address_components,
      (acc, item) => ({
        [item.types?.[0]]: item.types?.[0] === 'country' ? item.long_name.toLowerCase() : item.short_name,
        ...acc,
      }),
      {},
    );

    const addressRes = {
      unitNo: addressShortname.subpremise,
      streetNo: addressShortname.street_number,
      streetName: addressShortname.route,
      suburb: addressShortname.locality,
      state:
        addressShortname.administrative_area_level_1 ||
        addressShortname.administrative_area_level_2,
      country: addressShortname.country,
      postcode: addressShortname.postal_code,
    };

    _.forIn(addressRes, (value, key) => {
      form?.setValue(key, value || '', { shouldDirty: true, shouldValidate: true });
    });

    !addressRes?.streetNo && setMissingAddress(true);
    onChange(addressRes);
  };


  const searchOptions = {
    // types: ["street_address"],
    types: ['address'],
    componentRestrictions: { country: 'au' },
  };

  return (
    <Grid item sm={6}>
      <PlacesAutocomplete
        value={address || ''}
        onChange={handleChange}
        onSelect={handleSelect}
        shouldFetchSuggestions={address.length > 3}
        searchOptions={searchOptions}
        onError={(err: any) => {
          err === 'ZERO_RESULTS' && setNoResult(true);
        }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }: any) => (
          <Box position='relative' overflow='visible'>
            <InputCarly
              onChange={onChange}
              label={label}
              inputProps={{
                ...getInputProps(),
                // onBlur: () => onBlur(),
              }}
              // error={errorAddressMessage}
              // helperText={errorAddressMessage}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CustomToolTip
                      title='An Australian address is required for Australia and international residents'
                    />
                  </InputAdornment>
                ),
              }}
            />
            {(suggestions.length || noResult) && (
              <Box
                component={Paper}
                overflow='visible'
                position='absolute'
                width='100%'
                zIndex={10}
                py={1}
              >
                {loading && <MenuItem>Loading...</MenuItem>}

                {suggestions.map((suggestion: any) => (
                  <MenuItem
                    divider
                    {...getSuggestionItemProps(suggestion)}
                    key={suggestion.description}
                  >
                    {suggestion.description}
                  </MenuItem>
                ))}
                <MenuItem
                  divider
                  {...getSuggestionItemProps({
                    description: 'isManual',
                  } as Suggestion)}
                  sx={{
                    color: 'primary.main',
                  }}
                >
                  I cannot find my address
                </MenuItem>
                <Box textAlign='right' p={1}>
                  <img
                    height='20'
                    alt='powered_by_google'
                    src='/images/powered-by-google.png'
                  />
                </Box>
              </Box>
            )}
          </Box>
        )}
      </PlacesAutocomplete>
    </Grid>
  );
}
