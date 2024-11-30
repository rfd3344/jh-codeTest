import _ from 'lodash';

export const phoneNumberOnly = (str = '') => {
  const reg = /[^0-9()+]/g;
  return str.replace(reg, '');
};

export const numberOnly = (str = '') => {
  if (!_.isString(str)) return str;
  const reg = /[^0-9]/g;
  return str.replace(reg, '');
};

export const cardNumberOnly = (str = '') => {
  const filterNumbers = str.replace(/[^0-9]/g, '');
  return filterNumbers
    ? (filterNumbers.match(/.{1,4}/g)?.join(' ') as string)
    : '';
};

export const letterDashSpaceOnly = (str = '') => {
  if (!_.isString(str)) return str;

  const reg = /[^a-zA-Z- ]/g;
  return str.replace(reg, '');
};

export const letterAndNumbersOnly = (str = '') => {
  if (!_.isString(str)) return str;

  const reg = /[^a-zA-Z0-9]/g;
  return str.replace(reg, '');
};

export const patterns = {
  // email pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  // eslint-disable-next-line no-useless-escape
  // emailOnly: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

  emailOnly: /^([\w.+-]+)@([\w-]+)((\.(\w){2,3})+)$/,
  numberOnly: /[^0-9]/g,
  phoneNumberOnly: /[^0-9()+]/g,
  //Minimum eight characters, at least one letter uper and lowercase and one number and one special character:
  passwordOnly: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\d\s]).{8,}$/,
};

/*****************************************
 *
 *
 */
export const getKeyValueOptions = (options: {
  [key: string]: React.ReactNode;
}) =>
  _.keys(options).map((key) => ({
    value: key,
    label: options[key],
  }));
