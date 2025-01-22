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
              <p>⭐ {" "}I am a self-motivated Full-Stack developer with a unique journey from B.Com to tech. Despite starting with no coding background, my passion for learning and determination drove my transition into web development.</p><br /><br />
              <p>⭐ {" "}I’m a Full-Stack developer with a strong foundation in web development and a passion for continuous learning. I thrive on building clean, intuitive designs that not only meet client expectations but also enhance user engagement.</p>
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
