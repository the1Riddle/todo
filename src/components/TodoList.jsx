const TodoList = ({ todos, handleComplete, handleDelete }) => {
    return (
        <ol className="mt-2">
            {todos.map((todo) => (
                <li key={todo.id} className="flex mb-4 items-center">
                    <span
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.name}
                    </span>
                    <button onClick={() => handleComplete(todo.id)} className="ml-4">
                        {todo.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button onClick={() => handleDelete(todo.id)} className="ml-4">
                        Delete
                    </button>
                </li>
            ))}
        </ol>
    );
};

export default TodoList;
