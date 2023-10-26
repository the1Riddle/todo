import { useEffect, useState } from 'react';

// Props destructuring
const TodoForm = ({ handleClick }) => {
	const [input, setInput] = useState('');

	// Runs every time the component rerenders
	// useEffect(() => {
	// 	console.log('Executing');
	// });

	// Runs only once when the component loads/renders
	// useEffect(() => {
	// 	console.log('Runs only once');
	// }, []);

	// Runs once on component load and every time the dependancy changes
	// useEffect(() => {
	// 	document.title = input;
	// 	console.log('Runs every time the input changes');
	// }, [input]);

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
