import React from "react";

import Menu from "../utils/Menu";
import Background from "../utils/Background";

const About = () => {
  return (
    
      <div className="about">
        <Background></Background>
        <Menu page="about" />

        <div className="about__wrapper">
          <div className="title">About me</div>
          <div className="about__content">
            &emsp;&emsp;Hi guys, I am Chien Bui.
            <br></br>
            <br></br>&emsp;&emsp;I am a 3rd year student at ITMO (Information
            Technologies, Mechanics and Optics) University, St.Petersburg,
            Russia, majoring in Programming and Internet Technologies.I am
            highly interested in JavaScript, so I am learning Front-end
            development and looking forward to be a Front-end Web Developer.I am
            getting to join web projects, internship to get more skills.
            <br></br>
            <br></br>&emsp;&emsp;Here, I write about daily life activities.
            Check out my blogs and my social medias.
          </div>
        </div>
      </div>
    
  );
};

export default About;
