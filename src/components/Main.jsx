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
            Организуйте работу и личные дела. Создавайте задачи, расставляйте приоритеты и следите за прогрессом.
          </p>
        </NavLink>

        <NavLink to="/todo" className="main__items-item">
          <img src={toDoImg} alt="toDo" />
          <h2>ToDo List</h2>
          <p>
            Создавайте списки покупок, дел на день и отмечайте выполненные.
          </p>
        </NavLink>

        <NavLink to="/weather" className="main__items-item">
          <img src={weatherImg} alt="weather" />
          <h2>Weather</h2>
          <p>
            Получайте точные данные о погоде в любом городе мира. Просматривайте прогнозы на несколько дней.
          </p>
        </NavLink>

        <NavLink to="/contacts" className="main__items-item">
          <img src={contactsImg} alt="contacts" />
          <h2>Contacts</h2>
          <p>
            Если возникнут вопросы, Вы можете связаться с нами по email или заполнить форму обратной связи.
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Main;
