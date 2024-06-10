import React from "react";
import './skills.css';
import Backend from '../../assets/backend.png';
import Frontend from '../../assets/frontend.png';
import Database from '../../assets/db.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">I am skilled in...</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Backend} alt="Backend" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Backend Development</h2>
            <p>Experienced in OOD, TDD, Ruby, Rails, Python, Django, and RESTful API development.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Frontend} alt="Frontend" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Frontend Development</h2>
            <p>Proficient in React, JavaScript, HTML5, CSS3, Tailwind CSS, and Responsive Design.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Database} alt="Database" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Database Management</h2>
            <p>Skilled in PostgreSQL, SQL query optimization, data modeling, NoSQL databases (such as MongoDB), and working with ORMs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;