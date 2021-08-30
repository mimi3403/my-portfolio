import React from "react"

import projects from "../data/projects.json"
import { StyledProjectDetails } from "../styles/styled-components"

const ProjectDetails = (props) => {
  return (
    <StyledProjectDetails>
      <section>
        {
          projects.map((project, idx) => {
            return (
              <div key={idx} className="container">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <div className="project-info">
                  <p>{project.description}</p>
                  <p><strong>Technologies Used: </strong>{project.technologies}</p>
                </div>
                <div className="project-links">
                  <a href={project.githubLink}>View On Github</a>
                  <a href={project.deployedLink}>View Deployed Project</a>
                </div>
              </div>
            )
          }
          )
        }
      </section>
    </StyledProjectDetails>
  )
}

export default ProjectDetails