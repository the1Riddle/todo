import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import LoadingIndicator from './components/LoadingIndicator';
import ToggleThemeButton from './components/ToggleThemeButton';
import SearchBar from './components/SearchBar';

const BASE_URL = "https://my-json-server.typicode.com/NellieMK65/todo/todos";

function App() {
    const [todos, setTodos] = useState([]);
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

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

    const handleSearch = (query) => {
        setSearchQuery(query);
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

    const filteredTodos = todos.filter(todo =>
        todo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    

    return (
        <div className={`h-screen w-full flex flex-col gap-4 items-center justify-center ${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
            <div className={`container rounded shadow p-6 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <h1 className="text-3xl">Todo List</h1>
                <ToggleThemeButton darkMode={darkMode} setDarkMode={setDarkMode} />
                <SearchBar handleSearch={handleSearch} />
                {loading ? <LoadingIndicator /> : (
                    <>
                        <div className="flex mt-4 gap-2">
                            <TodoForm handleClick={handleClick} />
                        </div>
                        <TodoList todos={filteredTodos} handleComplete={handleComplete} handleDelete={handleDelete} />
                    </>
                )}
            </div>

            <div className="grid grid-cols-3 gap-4">
                {dogs.map((dog, index) => (
                    <div key={index} className={`h-[200px] w-[250px] ${darkMode ? 'bg-gray-900 text-white' : ''}`}>
                        <img src={dog} alt="dog" width="100%" height="100%" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
