import _ from 'lodash';

export const formatFullName = (
  firstName = '',
  lastName = '',
  middleName = ''
) => {
  if (!firstName) return '';

  if (middleName) return `${firstName} ${middleName} ${lastName}`;

  return `${firstName} ${lastName}`;
};
