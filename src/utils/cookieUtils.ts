// import { useState, useEffect } from 'react';
// import _ from 'lodash';
// import Cookies from 'universal-cookie';

// // check the document:
// // https://www.npmjs.com/package/universal-cookie
// export const cookie = new Cookies();

// /****
//  *
//  *  - if name is not provided, all cookies will be returned
//  *
//  */
// export const getCookie = (name = '') => {
//   if (name) return cookie.get(name);
//   else return cookie.getAll();
// };

// /*******
//  * @arg {String} name - name of the cookie
//  * @arg value - value of the cookie
//  *  - remove if null or undefined
//  * @arg options.maxAge - default expiration time 12 hours
//  *  - https://www.npmjs.com/package/universal-cookie#setname-value-options
//  */
// export const setCookie = (name = '', value = '', options = {}) => {
//   cookie.set(name, value, {
//     maxAge: 12 * 3600,
//     path: '/',
//     // secure: true,
//     // httpOnly: true,
//     ...options,
//   });
// };

// /***
//  * get cookie valu and listen to changes
//  */
// // export const useCookie = (key = '') => {
// //   const [value, setValue] = useState(() => getCookie(key) || '');

// //   useEffect(() => {
// //     const listener = ({ name = '', value = '' }) => {
// //       if (name !== key) return;
// //       setValue(value);
// //     };
// //     cookie.addChangeListener(listener);
// //     return () => {
// //       cookie.removeChangeListener(listener);
// //     };
// //   }, [key]);

// //   if (!key) {
// //     console.error('useCookie:key is required');
// //     return null;
// //   }

// //   return value;
// // };
