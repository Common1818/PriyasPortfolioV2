/* eslint-disable */
import React, { useContext } from "react";
import { ProjectContext } from "../../contexts/projectContext";
import "./css/projects.css";

const Projects = () => {
  const { project } = useContext(ProjectContext);
  const projectArray = project && project.project;
  console.log(projectArray);

  return (
    <div id="projects" className="">
      <header className="header animation-element">Projects</header>

      <div className="project-card-container">
        {projectArray &&
          projectArray.map((project) => {
            return (
              <div key={project.imageUrl} className="project-image-container">
                <img
                  alt="ProjectImage"
                  className="animation-element"
                  src={project.imageUrl}
                />
                <div className="project-image-text">
                  <span>{project.Name}</span>
                  <span>{project.Speciality}</span>
                  <span>
                    <a target="__blank" href={project.projectUrl}>
                      Learn More
                    </a>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
