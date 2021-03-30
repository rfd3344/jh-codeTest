import { v4 as uuidv4 } from 'uuid';
import ActionTypes from '../constants/ActionTypes';

export const addTodo = (name, priority) => ({
	type: ActionTypes.ADD_TODO,
	id: uuidv4(),
	name,
	priority,
});
export const toggleTodo = (id) => ({
	type: ActionTypes.TOGGLE_TODO,
	id,
});
export const deleteTodo = (id) => ({
	type: ActionTypes.DELETE_TODO,
	id,
});
