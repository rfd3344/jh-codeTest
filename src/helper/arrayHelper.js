
/**
 * Transfer array to Enumeration.
 *
 * @param {array} arr
 * @returns {object} Returns read only enumeration
 * @since 1.0.0
 * @example
 *
 * arrayToEnum(['Enum1', 'Enum2'])
 * => {Enum1: 'Enum1', Enum2: 'Enum2'}
 */
export function arrayToEnum(arr) {
	const res = arr.reduce((obj, item) => {
		obj[item] = item; // eslint-disable-line no-param-reassign
		return obj;
	}, {});
	return Object.freeze(res);
}
