import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <h1>Ranjan Kumar Mritunjay Ravi</h1>
        <p>Reg. no: 21BCE3360</p>
      </header>

      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>10th Grade:</strong> 91% from Sacred Heart Convent High School
          </li>
          <li>
            <strong>12th Grade:</strong> 92% from Sacred Heart Convent High School
          </li>
          <li>
            <strong>BTech in CSE Core:</strong> CGPA 8.30 from VIT Vellore
          </li>
        </ul>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Data Structures and Algorithms (DSA)</li>
          <li>MERN Full Stack Development</li>
          <li>Java Full Stack Development</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
