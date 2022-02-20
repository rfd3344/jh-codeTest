import _ from 'lodash';

/**
 * this method to format get url
 * ie: (http://example.com, {name:1, value:2})
 * => 'http://example.com?name=1&value=2'
 **/
export const formatGetUrl = (pathname = '', searchParams = {}) => {
  // omit null/undefined values
  const nextSearchParams = _.omitBy(searchParams, (item) => _.isNil(item));

  const searchStr = new URLSearchParams(nextSearchParams).toString();
  return `${pathname}?${searchStr}`;
};
