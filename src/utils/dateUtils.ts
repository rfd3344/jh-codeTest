// import * as dateFns from 'date-fns';
// import _ from 'lodash';

// /***
//  * format a date object to ISO format
//  * @param date - date
//  *
//  * @example - 2022-05-09T01:12:15.428Z
//  *
//  *
//  */
// export const formatISO = (date: Date | null) => {
//   if (date || dateFns.isValid(date)) {
//     return dateFns.formatISO(date as Date);
//   }
//   return '';

//   // return dateFns.formatISO(date);
// };

// /***
//  * parse a string to Date object
//  * @param date {String} - date
//  *
//  *
//  */
// export const parseISO = (date: unknown) => {
//   if (typeof date !== 'string') return null;

//   const res = dateFns.parseISO(date);
//   if (res.toString() === 'Invalid Date') return null;
//   return res;
// };

// /**********
//  * format a date object to ISO format
//  * @param date - str
//  * @example - 28 January, 2022
//  *
//  *
//  */
// export const formatISO2Date = (date: string, format = 'dd/MM/yyyy') => {
//   const formatedISO = parseISO(date);
//   if (!formatedISO) return '';
//   return dateFns.format(formatedISO, format);
// };

// /************************
//  * format a date object to ISO format
//  * @param value - date str
//  * @param format - expected format i.e: 'dd/MM/yyyy'
//  * @example -
//  *
//  */
// export const autofillDateField = (date: string, format = 'dd/MM/yyyy') => {};

// // export const parseISO = dateFns.parseISO;
// // export const formatISO = dateFns.formatISO;
// export const set = dateFns.set;
// export const addDays = dateFns.addDays;
// export const getYear = dateFns.getYear;
// export const addYears = dateFns.addYears;
// export const subYears = dateFns.subYears;
// export const getTime = dateFns.getTime;
