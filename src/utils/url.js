import { useLocation } from 'react-router-dom';
import _ from 'lodash';

/**
 * this method to get url query parameters
 * will return Boolean if it only has a name
 **/
export const useQuery = (name = '') => {
  const query = new URLSearchParams(useLocation().search);
  const res = query.get(name);
  if (res === '') return true;
  return query.get(name);
};

/**
 * this method to format get url
 * ie: (http://example.com, {name:1, value:2})
 * => 'http://example.com?name=1&value=2'
 **/
export const formatUrl = (pathname = '', searchParams = {}) => {
  // omit null/undefined values
  const nextSearchParams = _.omitBy(searchParams, (item) => _.isNil(item));

  const searchStr = new URLSearchParams(nextSearchParams).toString();
  return `${pathname}?${searchStr}`;
};
