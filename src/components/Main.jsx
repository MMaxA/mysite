import React from "react";
import "./Main.css";
import taskImg from "../assets/taskImg.png";
import toDoImg from "../assets/todoImg.png";
import weatherImg from "../assets/weatherImg.png";
import contactsImg from "../assets/contactsImg.png";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div className="main-wrapper">
      <div className="main__items">
        <NavLink to="/taskmanager" className="main__items-item">
          <img src={taskImg} alt="task" />
          <h2>Task Manager</h2>
          <p>
            Organize your work and personal affairs. Create tasks, prioritize
            and monitor progress.
          </p>
        </NavLink>

        <NavLink to="/todo" className="main__items-item">
          <img src={toDoImg} alt="toDo" />
          <h2>ToDo List</h2>
          <p>
            Create shopping and to-do lists for the day and mark their
            completion.
          </p>
        </NavLink>

        <NavLink to="/weather" className="main__items-item">
          <img src={weatherImg} alt="weather" />
          <h2>Weather</h2>
          <p>
            Get accurate weather data in any city in the world. Browse forecasts
            for several days.
          </p>
        </NavLink>

        <NavLink to="/contacts" className="main__items-item">
          <img src={contactsImg} alt="contacts" />
          <h2>Contacts</h2>
          <p>
            If you have any questions, you can contact us by email or fill out
            the feedback form.
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Main;
