
function getPriorityNum(priority) {
	switch (priority) {
	case 'low': return 1;
	case 'medium': return 2;
	case 'high': return 3;
	default: return 0;
	}
}


export function sortTodosList(todos = [], sortBy = 'name') {
	if (sortBy === 'name') {
		return todos.sort(function (a, b) {
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			return 0;
		});
	}

	if (sortBy === 'priority') {
		return todos.sort(function (a, b) {
			return getPriorityNum(b.priority) - getPriorityNum(a.priority);
		});
	}
	return [];
}
