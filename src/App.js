import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import TaskManager from "./components/TaskManager";
import Weather from "./components/Weather";
import TodoList from "./components/ToDoList";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/taskmanager" element={<TaskManager />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
