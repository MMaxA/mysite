import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import TaskManager from "./components/TaskManager";
import Weather from "./components/Weather";
import TodoList from "./components/ToDoList";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
      <Navigation />
        <Routes>
          <Route path="/" element={<TaskManager />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
