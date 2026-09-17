import React from "react";

const AboutDesc = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <p className="about-description">
          With an MCA in Computer Applications from Mahatma Gandhi Kashi
          Vidyapith University and a BCA from Microtek College of Management and
          Technology, I've built a solid foundation in software development. My
          internship as a Frontend Developer at Spark & Bloom IT Solutions gave
          me hands-on experience crafting clean, responsive web interfaces using
          React.js, HTML5, CSS3, and JavaScript.
        </p>

        <p className="about-description">
          On the backend, I work with Java, Node.js, Express.js, and REST APIs,
          along with databases like MongoDB, MySQL, and PostgreSQL. I recently
          built an Interview Prep application that generates interview questions
          on demand, backed by MongoDB — reflecting my interest in creating
          practical, useful tools.
        </p>

        <div className="about-content">
          <div className="about-box">
            <h3>Education</h3>
            <p>BCA & MCA in Computer Science</p>
          </div>

          <div className="about-box">
            <h3>Experience</h3>
            <p>Spark & Bloom IT Solutions</p>
          </div>

          <div className="about-box">
            <h3>Skills</h3>
            <p>Backend Development</p>
          </div>

          <div className="about-box">
            <h3>Languages</h3>
            <ul className="about-list">
              <li>Hindi (Native)</li>
              <li>English (Professional fluency)</li>
            </ul>
          </div>

          <div className="about-box">
            <h3>Achievements</h3>
            <ul className="about-list">
              <li>Portfolio projects delivered</li>
              <li>Continuous backend upskilling</li>
            </ul>
          </div>

          <div className="about-box">
            <h3>Hobbies</h3>
            <ul className="about-list">
              <li>Chess</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDesc;
