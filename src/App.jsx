import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';

function App() {
	const [todos, setTodos] = useState([]);
	const [dogs, setDogs] = useState([]);

	console.log(dogs);

	const handleClick = (todo) => {
		/**
		 * Spread in the initial todos
		 * add the new todo
		 */
		setTodos([...todos, todo]);
	};

	useEffect(() => {
		fetch('https://dog.ceo/api/breeds/image/random/3')
			.then((res) => res.json())
			.then((data) => setDogs(data.message))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="h-screen w-full flex flex-col gap-4 items-center justify-center bg-gray-100">
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

			<div className="grid grid-cols-3 gap-4">
				{dogs.map((dog, index) => {
					return (
						<div key={index} className="h-[200px] w-[250px]">
							<img
								src={dog}
								width="100%"
								height="100%"
								// className="min-h-[200]"
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
