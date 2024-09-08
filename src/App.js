import React, { useState } from 'react';
import './App.css';

const translations = {
  en: {
    title: "To-Do List",
    placeholder: "Add a new task",
    addButton: "Add Task",
    deleteButton: "Delete",
    noTasks: "No tasks available",
  },
  hi: {
    title: "टू-डू सूची",
    placeholder: "एक नया कार्य जोड़ें",
    addButton: "कार्य जोड़ें",
    deleteButton: "हटाएँ",
    noTasks: "कोई कार्य उपलब्ध नहीं है",
  },
  te: {
    title: "టూ-డూ జాబితా",
    placeholder: "కొత్త పని జోడించండి",
    addButton: "పని జోడించండి",
    deleteButton: "తొలగించు",
    noTasks: "ఏ పనులు అందుబాటులో లేదు",
  },
};

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [language, setLanguage] = useState('en');

  const addTodo = () => {
    if (newTask.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const { title, placeholder, addButton, deleteButton, noTasks } = translations[language];

  return (
    <div className="App">
      <div className="header">
        <h1>{title}</h1>
      </div>
      <div className="language-switcher">
        <button onClick={() => setLanguage('en')}>English</button>
        <button onClick={() => setLanguage('hi')}>हिन्दी</button>
        <button onClick={() => setLanguage('te')}>తెలుగు</button>
      </div>
      <div className="add-todo">
        <input
          type="text"
          placeholder={placeholder}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTodo}>{addButton}</button>
      </div>
      <ul className="todo-list">
        {todos.length === 0 ? (
          <li>{noTasks}</li>
        ) : (
          todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
              <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                {deleteButton}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
