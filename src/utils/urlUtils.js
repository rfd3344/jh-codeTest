import _ from 'lodash';

export const formatGetUrl = (pathname = '', searchParams = {}) => {
  // omit null/undefined values
  const nextSearchParams = _.omitBy(searchParams, (item) => _.isNil(item));

  const searchStr = new URLSearchParams(nextSearchParams).toString();
  return `${pathname}?${searchStr}`;
};
