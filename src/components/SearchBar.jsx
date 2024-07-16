import { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
        handleSearch(e.target.value);
    };

    return (
        <div className="mt-4">
            <input
                type="text"
                className="border rounded p-2 w-full"
                placeholder="Search todos"
                value={input}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchBar;
