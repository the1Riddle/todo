import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';


const BASE_URL = "https://my-json-server.typicode.com/NellieMK65/todo/todos";

function App() {
    const [todos, setTodos] = useState([]);
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleClick = (todo) => {
        if (todo.trim() === '') {
            alert('Todo cannot be empty');
            return;
        }

        fetch(BASE_URL, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({ name: todo }),
        })
            .then((res) => res.json())
            .then((data) => setTodos([...todos, data]))
            .catch((err) => alert('Failed to add todo'));
    };

    const handleDelete = (id) => {
        fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(() => setTodos(todos.filter(todo => todo.id !== id)))
            .catch((err) => console.log(err));
    };

    const handleComplete = (id) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );

        setTodos(updatedTodos);
    };

    useEffect(() => {
        const fetchTodos = async () => {
            setLoading(true);
            try {
                const res = await fetch(BASE_URL);
                const data = await res.json();
                setTodos(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTodos();
    }, []);

    return (
        <div className="h-screen w-full flex flex-col gap-4 items-center justify-center bg-gray-100">
            <div className="bg-white rounded shadow p-6">
                <h1 className="text-3xl">Todo List</h1>
                {loading ? <LoadingIndicator /> : (
                    <>
                        <div className="flex mt-4 gap-2">
                            <TodoForm handleClick={handleClick} />
                        </div>
                        <TodoList todos={todos} handleComplete={handleComplete} handleDelete={handleDelete} />
                    </>
                )}
            </div>

            <div className="grid grid-cols-3 gap-4">
                {dogs.map((dog, index) => (
                    <div key={index} className="h-[200px] w-[250px]">
                        <img src={dog} alt="dog" width="100%" height="100%" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
