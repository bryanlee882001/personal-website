import './HeroPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';

const HeroPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>

      {/* Night Mode Button */}
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
      </div>

      {/* Title and Role */}
      <div className="title_container">
        <h1>Hi,I'm Bryan.</h1>
        <h2>
          <TypeAnimation
            sequence={[
              "Data Engineer",
              1000,
              "Software Engineer",
              1000,
              "Solution Analyst",
              1000,
              "CS @ University of Minnesota",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>
      </div>

      {/* Links to resume, linkedin, and github */}
      <div className="links_container">
        <a href="./src/assets/Bryan_Resume.pdf" target="blank">Resume</a>
        <a href="https://www.linkedin.com/in/bryanleeyensheng/" target="blank">LinkedIn</a>
        <a href="https://github.com/bryanlee882001" target="blank">GitHub</a>
        <a href="mailto:bryanleeyensheng@gmail.com">Contact</a>
      </div>

      {/* Introduction */}
      <div className="description_container">
        <p>Based in Minneapolis, MN. I'm currently a Data Engineer Intern @ <a href="https://www.bfcsoftware.com/" target="blank">BFC Software </a>
        where I build and optimize data pipelines to scale with our growing infrastructure. I am particularly interested in distributed
        computing and big data processing.</p>

        <br/><br/>

        <p>Concurrently, I contribute to research at the University of Minnesota, where I lead the development 
        of  <a href="https://github.com/bryanlee882001/AIMSES" target="blank">AIMSES</a> for real-time statistical computation of collected 
        spectral data from <a href="https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1996-049A" target="blank">NASA's FAST satellite</a> @ 
        the <a href="https://cse.umn.edu/physics" target="blank">School of Physics & Astronomy</a>, 
        as well as assisting in the development of ECG compression algorithms and data tools for cardiac monitoring @ <a href="https://dcsg.cs.umn.edu/" target="blank">Distributed Computing Systems Group</a>.</p>

        <br/><br/>

        <p>I've previously worked as a Solution Analyst @ <a href="https://www.genustechnologies.com/" target="blank">Genus Technologies</a> and
         a Software Development Engineer Intern @ <a href="https://www.keysight.com/us/en/home.html" target="blank">Keysight Technologies</a> where
         I collaborated with interdiscplinary teams to drive impactful solutions and deliver results. 
        </p>
      </div>
    </div>
  );
};

export default HeroPage;