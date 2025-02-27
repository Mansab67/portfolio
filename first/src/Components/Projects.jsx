import React, { useState } from 'react';
import './project.css';
import p2 from '../assets/main.png'
import p3 from '../assets/page3.png'
import p4 from '../assets/page4.png'
import p5 from '../assets/page5.png'

import p1Main from '../assets/movie.png'
import port from '../assets/pro1.png'
import portC from '../assets/proc.png'
// import resp from '../assets/pro2.png'

const Projects = () => {
  const [showDetails1, setShowDetails] = useState(false);
  const [showDetails2, setShowDetail2] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails1);
  };
  
  const toggleDetails2 = () => {
    setShowDetail2(!showDetails2);
  };
  return (
    <div id='Projects'>
      <h1>Projects</h1>
      <div className='project-card'>
     
        <div className='main-image'>
          <img
            src={p1Main}
            alt='Main Project'
            onClick={toggleDetails}
          />
        </div>
        <h2>Movie Streaming</h2>
     
        {showDetails1 && (
          <>
          <div className='code' ><a href='https://shimmering-kitsune-443682.netlify.app/'> <img src="   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBs3rytrmJIkL6KZHtrKE-zE79zn5v82d1Bw&s" alt="Live"/> Check Live Site</a> <a href='https://github.com/masai-course/mansab_mehto_ft38_714/tree/master/main%20project/react-movie-master'>   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" alt="github"/> Get Code</a></div>
          <div className='project-details'>
            <p>
            <span>Description</span>  : Combines "Video" and "Sphere," symbolizing a world of videos. It conveys the idea of a platform offering a vast collection of video content.
            </p>
            <h3>Tools Used</h3> 
            <ul>
              <li>React</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Firebase</li>
              <li>Html</li>
            </ul>
            <div className='additional-images'>
              <h3>Gallery</h3>
              <div className='image-grid'>
                <img src={p2} alt='Additional 1' />
                <img src={p3} alt='Additional 2' />
                <img src={p4} alt='Additional 3' />
                <img src={p5} alt='Additional 4' />
               
              </div>
            </div>
          </div>
          </>
        )}
        
      </div>
      <div className='project-card'>
     
     <div className='main-image'>
       <img
         src={port}
         alt='Main Project'
         onClick={toggleDetails2}
       />
     </div>
     <h2>Crime Portal</h2>
  
     {showDetails2 && (
       <>
       <div className='code' ><a href='https://crimepetrol.netlify.app/'> <img src="   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBs3rytrmJIkL6KZHtrKE-zE79zn5v82d1Bw&s" alt="github"/> Check Live Site</a> <a href='https://github.com/manojRawat5/B41_WEB_033_Responsive-Rebels'>   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" alt="github"/> Get Code</a></div>
       <div className='project-details'>
         <p>
         <span>Description</span>  :SafeTrack - Monitor, Report, Prevent. LawConnect - Bridging Communities and Authorities., a contact form.
         </p>
         <h3>Tools Used</h3> 
         <ul>
           <li>React</li>
           <li>CSS</li>
           <li>JavaScript</li>
           <li>Html</li>
           <li></li>      
         </ul>
         <div className='additional-images'>
           <h3>Gallery</h3>
           <div className='pic'>
           <div className='image-pic'>
             <img src={port} alt='Additional 1' />
             <img src={portC} alt='Additional 2' />
          
           </div>
           {/* <img src={resp} alt='Additional 4' id='cla' /> */}
         </div>
      
         </div>
    
       </div>
       </>
     )}
     
   </div>




    </div>
   
  );
};

export default Projects;
