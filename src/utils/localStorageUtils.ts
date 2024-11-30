import { useState, useEffect } from 'react';
import _ from 'lodash';

// expire date are not supported
// const EXPIRY_DATE = '_EXPIRY_DATE'; // name for expiry date
export const STORAGE_CHANGE = 'STORAGE_CHANGE'; // name for storage change event

// const getCurrentTime = () => new Date().getTime();

/****
 * it will check the exiprie date
 * @arg name - name of the cookie
 *  - if name is not provided, all localStorage will be returned
 *
 */
export const getLocalStorage = (name = '') => {
  if (!name) return localStorage;

  const value = localStorage.getItem(name);
  if (!value) return;

  const res = JSON.parse(value);

  return res;
};

/*******
 * @arg name - name of the localStorage
 * @arg value - value of the localStorage
 *
 *
 */
export const setLocalStorage = (name = '', value = '') => {
  localStorage.setItem(name, JSON.stringify(value));

  // if (expiry) {
  //   localStorage.setItem(
  //     name + EXPIRY_DATE,
  //     (getCurrentTime() + expiry).toString()
  //   );
  // }

  window.dispatchEvent(new Event(STORAGE_CHANGE));
};

// export const useLocalStorage = (name = '') => {
//   const [value, setValue] = useState(() => getLocalStorage(name));

//   useEffect(() => {
//     if (_.isUndefined(value)) return;

//     const listener = () => {
//       const nextValue = getLocalStorage(name);
//       if (_.isEqual(value, nextValue)) return;

//       setValue(nextValue);
//     };
//     window.addEventListener(STORAGE_CHANGE, listener);
//     return () => {
//       window.removeEventListener(STORAGE_CHANGE, listener);
//     };
//   }, [name, value]);

//   return value;
// };
