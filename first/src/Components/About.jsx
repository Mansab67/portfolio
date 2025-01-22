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
            <p>⭐ {" "}I am a self-motivated Full-Stack developer with a solid foundation in computer applications, transitioning from a BCA background to the dynamic field of tech. My curiosity and determination have driven me to master web development and continuously expand my skill set.</p><br /><br />
<p>⭐ {" "}As a Full-Stack developer, I combine technical expertise with a passion for crafting clean, user-friendly designs. I thrive on building solutions that not only meet client requirements but also deliver exceptional user experiences.</p>

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
