// import _ from 'lodash';

// import packageJson from 'src/../package.json';

// /*********************************************************************************************
//  * only added in development environment
//  *
//  */
// export const addDevFunctions = () => {
//   _.mixin({
//     log: isDev() ? console.log : () => {},
//     warn: isDev() ? console.warn : () => {},
//     error: console.error,
//   });

//   showVersion();
// };

// const showVersion = () => {
//   const { REACT_APP_STAGE, REACT_APP_BUILD_TIME } = process.env;

//   const info = `env: ${REACT_APP_STAGE}, version: ${packageJson.version}, buildTime: ${REACT_APP_BUILD_TIME} `;
//   const style = 'color:#f46036; font-size: 14px; font-weight: bold;';
//   console.log(`%c${info}`, style);
// };

// /*********************************************************************************************
//  * method to check current environment is development or not
//  *
//  */
// export const isDev = () => process.env.NODE_ENV === 'development';
