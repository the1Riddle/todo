import { useState } from 'react';

// Props destructuring
const TodoForm = ({ handleClick }) => {
	const [input, setInput] = useState('');

	return (
		<>
			<input
				className="border rounded p-2"
				placeholder="Add todo"
				value={input}
				// Attach onChange event
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				className="border rounded p-2"
				// Attach onClick event and pass data back to parent component
				onClick={() => {
					handleClick(input);
					// reset input
					setInput('');
				}}
			>
				Add
			</button>
		</>
	);
};

export default TodoForm;
