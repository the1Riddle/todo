import { useState } from 'react';

const TodoForm = ({ handleClick }) => {
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        if (input.trim() === '') {
            alert('Todo cannot be empty');
            return;
        }

        handleClick(input);
        setInput('');
    };

    return (
        <>
            <input
                className="border rounded p-2"
                placeholder="Add todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                className="border rounded p-2"
                onClick={handleSubmit}
            >
                Add
            </button>
        </>
    );
};

export default TodoForm;
