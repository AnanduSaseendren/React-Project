import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    if (input.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My To-Do List</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTodo}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {todos.length === 0 && (
          <li className="list-group-item text-muted text-center">
            No tasks yet!
          </li>
        )}
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              todo.completed ? 'list-group-item-success' : ''
            }`}
          >
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>

            <div className="btn-group">
              <button
                className={`btn btn-sm ${
                  todo.completed ? 'btn-secondary' : 'btn-success'
                }`}
                onClick={() => handleToggle(todo.id)}
              >
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;