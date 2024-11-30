import _ from 'lodash';


/************************************************************************
 * method to format the address
 * @param arg.unitNo - unitNo
 * @param arg.streetNo - unitNo
 * @param arg.streetName - unitNo
 * @param arg.suburb - suburb
 * @param arg.state - state
 * @param arg.postcode - postcode
 * @param arg.country - country
 *
 */
export const formatAddress = ({
  unitNo = '',
  streetNo = '',
  streetName = '',
  suburb = '',
  state = '',
  postcode = '',
  country = '',
}) => {
  if (!suburb || !streetName) return '';
  return `${unitNo ? `${unitNo  }/` : ''}${streetNo} ${streetName}, ${suburb} ${state} ${postcode}`;

};
