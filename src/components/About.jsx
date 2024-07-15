import React from "react";
import { useSelector } from "react-redux";
import maximPhoto from "../assets/maxim.jpg"; // Import the photo
import "./About.css"; // Import the CSS file for About component

const About = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="section about-section">
      <div className="profile">
        <img src={maximPhoto} alt="Maxim Medvedev" className="profile-photo" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          My name is {user.name}. I'm 42 years old. I am a web developer and also
          teach students at the Ural State Technical University. I have:
            <ul>
              <li> - PhD in Economics
              and a Master's in Applied Informatics.</li>
              <li>- experience working with React, Redux Toolkit, Python (Django) </li>
              <li>- been working as a developer since 2011</li>
              <li>- experience in ASP.NET MVC and C#.</li>
            </ul> 
        </p>
      </div>
    </div>
  );
};

export default About;
