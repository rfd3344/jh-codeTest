export const initialState = {
	todos: {
		list: [
			{
				id: '1',
				name: 'item1',
				priority: 'low',
				completed: false,
			},
			{
				id: '2',
				name: 'item2',
				priority: 'high',
				completed: true,
			},
			{
				id: '3',
				name: 'item3',
				priority: 'low',
				completed: false,
			},
			{
				id: '4',
				name: 'item4',
				priority: 'medium',
				completed: false,
			},
		],
		totalNum: 4,
		completedNum: 1,
	},
};
