import React from "react";
import "./projects.css";
const projects = [
  {
    title: "Interview Prep",
    description:
      "Full Stack MERN project that generates interview questions on demand.",
    tech: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB",
    link: "https://deepak-interviewprep.netlify.app",
    github:
      "https://github.com/Deepak-Vishwakarma1/Interview_questionGenerator",
  },
  {
    title: "Cepta Educational UI",
    description: "This is fully Responsive Website for Education purpose.",
    tech: "HTML, CSS, JavaScript, Boostrap",
    link: "https://ceptaeducational.netlify.app/",
  },
  {
    title: "Arl Expressway (Transportation UI)",
    description:
      "Website for booking Vehicles(Transportation UI) According to their user requirement.",
    tech: "HTML, CSS, JavaScript",
    link: "https://arlexpressway.netlify.app/",
  },
];
const Project = () => {
  return (
    <>
      <section className="projects">
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <p className="tech">
                <strong>Tech:</strong> {project.tech}
              </p>

              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
