import ActionTypes from '_constants/ActionTypes';

let nextTodoId = 5;

export const addTodo = (name, priority) => ({
	type: ActionTypes.ADD_TODO,
	id: nextTodoId++,
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
