import React from "react";
import st1 from  '../assets/st1.png'
import st2 from  '../assets/st2.png'
import './stat.css'

const Stat = () => {
  return (

    <div className="stat-page">
      {/* Stats Section */}
      <div className="calendar-section">
        <h2>My GitHub Calendar</h2>
        <div className="calendar">
          <img src={st1} alt="GitHub Calendar" className="calendar-image" />
        </div>
        <div className="calendar-info">
          <div>
            <strong>Contributions in the last year</strong>
            <p>145 total</p>
          </div>
          <div>
            <strong>Longest streak</strong>
            <p>26days</p>
          </div>
          <div>
            <strong>Current streak</strong>
            <p>5 days</p>
          </div>
        </div>
      </div>
      <div className="stats-section">
        <div className="stat-card">
          <img src={st2} alt="GitHub Stats" className="stat-image" />
        </div>
      </div>

      {/* Calendar Section */}
      
    </div>
  );
};

export default Stat;