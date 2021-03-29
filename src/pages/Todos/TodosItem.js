
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '_actions/todos';

function TodosItem({
	itemId, name, priority, completed,
	handleToggle, handleDelete,
}) {
	const [isCompleted, setIsCompleted] = useState(completed);

	const handleCheckBox = () => {
		setIsCompleted(!isCompleted);
		handleToggle(itemId);
	};

	let itemClassName = completed ? 'completed ' : 'pending ';
	itemClassName += 'list-group-item TodosItem';

	return (
		<li className={itemClassName}>
			<span className="name">
				{name}
			</span>
			<span className={`${priority} priority`}>
				{priority}
			</span>
			<span className="actions">
				<input type="checkbox" checked={isCompleted} onChange={handleCheckBox} />
				<i className="material-icons" onClick={handleDelete.bind(null, itemId)}>delete</i>
			</span>
		</li>
	);
}

const mapDispatchToProps = (dispatch) => ({
	handleToggle: (id) => dispatch(toggleTodo(id)),
	handleDelete: (id) => dispatch(deleteTodo(id)),
});

TodosItem.propTypes = {
	itemId: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	priority: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	handleToggle: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TodosItem);
