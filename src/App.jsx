import { useState } from 'react';
import TodoForm from './components/TodoForm';

function App() {
	const [todos, setTodos] = useState([]);

	const handleClick = (todo) => {
		/**
		 * Spread in the initial todos
		 * add the new todo
		 */
		setTodos([...todos, todo]);
	};

	return (
		<div className="h-screen w-full flex items-center justify-center bg-gray-100">
			<div className="bg-white rounded shadow p-6">
				<h1 className="text-3xl">Todo List</h1>

				<div className="flex mt-4 gap-2">
					<TodoForm handleClick={handleClick} />
				</div>

				<ol className="mt-2">
					{todos.map((todo, index) => (
						<li key={index} className="flex mb-4 items-center">
							{todo}
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}

export default App;
