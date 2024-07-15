import React from "react";
import "./Main.css";
import taskImg from "../assets/taskImg.png";
import toDoImg from "../assets/todoImg.png";
import weatherImg from "../assets/weatherImg.png";
import contactsImg from "../assets/contactsImg.png";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div className="container main-wrapper">
      <div className="main__items">
        <NavLink to="/taskmanager" className="main__items-item">
          <img src={taskImg} alt="task" />
          <h2>Task Manager</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            exercitationem iste, voluptatum, quia explicabo laboriosam rem
            adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
            asperiores harum? Dicta odio aut hic.
          </p>
        </NavLink>

        <NavLink to="/todo" className="main__items-item">
          <img src={toDoImg} alt="toDo" />
          <h2>ToDo List</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            exercitationem iste, voluptatum, quia explicabo laboriosam rem
            adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
            asperiores harum? Dicta odio aut hic.
          </p>
        </NavLink>

        <NavLink to="/weather" className="main__items-item">
          <img src={weatherImg} alt="weather" />
          <h2>Weather</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            exercitationem iste, voluptatum, quia explicabo laboriosam rem
            adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
            asperiores harum? Dicta odio aut hic.
          </p>
        </NavLink>

        <NavLink to="/contacts" className="main__items-item">
          <img src={contactsImg} alt="contacts" />
          <h2>Contacts</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            exercitationem iste, voluptatum, quia explicabo laboriosam rem
            adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
            asperiores harum? Dicta odio aut hic.
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Main;
