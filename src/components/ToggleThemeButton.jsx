const ToggleThemeButton = ({ darkMode, setDarkMode }) => {
    return (
        <button
            className="border rounded p-2 mt-4"
            onClick={() => setDarkMode(!darkMode)}
        >
            Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
    );
};

export default ToggleThemeButton;
