import React from "react";
import { useSelector } from "react-redux";
import maximPhoto from "../assets/maxim.jpg"; // Import the photo
import "./About.css"; // Import the CSS file for About component

const About = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="container about-section">
      <div className="profile">
        <img src={maximPhoto} alt="Maxim Medvedev" className="profile-photo" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          My name is {user.name}. I'm 42 years old. I am a web developer and
          also teach students at the Ural State Technical University. 
        </p>
        <p>I have:</p>
        <ul>
          <li> - PhD in Economics and a Master's in Applied Informatics.</li>
          <li>
            - experience of working with React.js, Redux Toolkit, Python (Django)
          </li>
          <li>- been working as a WEB-developer since 2011</li>
          <li>- experience in ASP.NET MVC and C#.</li>
        </ul>
      </div>
      <div>
        Источники картинок на главной: <a href="https://www.freepik.com/icon/contact-book_12370535#fromView=search&page=1&position=6&uuid=d4260eca-fc40-4a26-899c-1192720583d0">Icon by Iconsea</a>
        <a href="https://www.freepik.com/icon/board_16445452#fromView=search&page=1&position=26&uuid=b87f9917-eb4e-4913-964d-f76e41f8dcd6">Icon by Three musketeers</a>
        <a href="https://www.freepik.com/icon/list_14523039#fromView=search&page=1&position=60&uuid=5389b101-46ba-46ea-b9d8-aa9b69b778c8">Icon by Freepik</a>
        <a href="https://www.freepik.com/icon/weather-news_648198#fromView=search&page=1&position=9&uuid=8a39b785-1df6-480a-83cd-dd9ee7fcdf7c">Icon by Freepik</a>
      </div>
    </div>
  );
};

export default About;
