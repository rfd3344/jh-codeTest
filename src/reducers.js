
import { combineReducers } from 'redux';

import todos from '_reducers/todos';

// lastAction reducer
// function lastAction(state = null, action) { // eslint-disable-line no-unused-vars
// 	// logger.log(`lastAction: ${state}`, ', newAction', action);
// 	return action.type;
// }

export default combineReducers({
	// lastAction,
	todos,
});
