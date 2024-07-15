import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../store/store';
import '../components/ToDoList.css'; // Import CSS for the ToDolist component

const ToDolist = () => {
  const [todoText, setTodoText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    // Save todos to localStorage whenever todos state changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  return (
    <div className="section portfolio-section">
      <h2>ToDo List</h2>
      <div className="todo-app">
        <div className="todo-input">
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Enter a new todo"
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <span onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.text}
              </span>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDolist;
