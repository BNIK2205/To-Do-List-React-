import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newTodoDate, setNewTodoDate] = useState('');
  const [newTodoTime, setNewTodoTime] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        {
          text: newTodo,
          date: newTodoDate,
          time: newTodoTime,
          completed: false,
        },
      ]);
      setNewTodo('');
      setNewTodoDate('');
      setNewTodoTime('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>To-Do List</h1>
      </div>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <div className="reminder-time">
          <label>Reminder Date:</label>
          <input
            type="date"
            value={newTodoDate}
            onChange={(e) => setNewTodoDate(e.target.value)}
          />
          <label>Reminder Time:</label>
          <input
            type="time"
            value={newTodoTime}
            onChange={(e) => setNewTodoTime(e.target.value)}
          />
        </div>
        <button onClick={handleAddTodo}>Add Task</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={todo.completed ? 'completed' : ''}
          >
            <span onClick={() => handleToggleComplete(index)}>
              {todo.text} 
              {todo.date && todo.time ? ` - Reminder: ${todo.date} ${todo.time}` : ''}
            </span>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
