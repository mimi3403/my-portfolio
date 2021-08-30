import React from "react"

import projects from "../data/projects.json"
import { StyledProjectInfo } from "../styles/styled-components"

const ProjectInfo = (props) => {
  return (
    <div>
      <StyledProjectInfo>
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>Projects</h3>
        <section>
          {
            projects.map((project, idx) => {
              return (
                <article key={idx} >
                  <img src={project.image} alt={project.title} />
                  <a href={project.githubLink}>{project.title}</a>
                  <br />
                </article>
              )
            }
            )
          }
        </section>
      </StyledProjectInfo>
    </div>
  )
}

export default ProjectInfo