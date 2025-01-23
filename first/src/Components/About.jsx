import React from 'react'
import './About.css'

const About = () => {
 

  return (

      <div id="about" className="about">
        <div className="about-title">
          <h1>About me</h1>
        </div>
        <div className="about-selection">
          <div className="about-right">   
            <div className="about-para">
            <p>⭐ {" "}I am a Full-Stack developer with a BCA background who loves creating websites and apps. I work with tools like React.js, Node.js, and MongoDB to build things that work well and look great. I’m always curious and enjoy learning new tech to get better every day.</p><br />
            <br />
             <p>⭐ {" "}As a developer, I focus on making websites and apps that are easy to use and solve problems. My goal is to create things people love to use and that make their lives easier.</p>

            </div>
          </div>
        </div>
        <div className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Full Stack Development
            
</strong>  <br />  <br />Masai School
July 2024-present
     
          </li>
          <li>
            <strong>Bachelor of Computer Application<br/>
</strong> IPU DELHI <br/> 
May 2021 - June 2024
          
          </li>
          <li>
            <strong> Computer Operator and Programing Assistance</strong> <br />
ITI Delhi<br/>
July 2019 - October 2021
           
          </li>
        </ul>
      </div>


      </div>
   
  );
}

export default About;
