

const initialState = {
	list: [
		{
			id: 1,
			name: 'item1',
			priority: 'low',
			completed: false,
		},
		{
			id: 2,
			name: 'item2',
			priority: 'high',
			completed: true,
		},
		{
			id: 3,
			name: 'item3',
			priority: 'low',
			completed: false,
		},
		{
			id: 4,
			name: 'item4',
			priority: 'medium',
			completed: false,
		},
	],
	totalNum: 4,
	completedNum: 1,
};

const handleToggleTodo = (state, action) => {
	const newList = state.list.map((item) => {
		if (item.id === action.id) {
			return {
				...item,
				completed: !item.completed,
			};
		}
		return item;
	});

	let completedNum = 0;
	newList.forEach((item) => {
		if (item.completed) completedNum++;
	});

	return {
		...state,
		list: newList,
		completedNum,
	};
};


export default function todos(state = initialState, action) {
	switch (action.type) {
	case 'ADD_TODO':
		return {
			...state,
			list: [
				...state.list,
				{
					id: action.id,
					name: action.name,
					priority: action.priority,
					completed: false,
				},
			],
			totalNum: state.totalNum + 1,
		};
	case 'TOGGLE_TODO':
		return handleToggleTodo(state, action);
	case 'DELETE_TODO':
		return {
			...state,
			list: state.list.filter((item) => item.id !== action.id),
		};
	default: return state;
	}
}
