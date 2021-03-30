import { arrayToEnum } from '../helper/arrayHelper';

const ActionTypes = [
	'ADD_TODO',
	'TOGGLE_TODO',
	'DELETE_TODO',
	'OTHER_ACTION',
];

export default arrayToEnum(ActionTypes);
