import React from "react"

import { StyledAboutInfo } from "../styles/styled-components"


const AboutInfo = (props) => {
  return (
    <StyledAboutInfo>
      <h3 style={{ textAlign: "center", marginTop: "40px" }}>About Me</h3>
      <div className="info-container">
        <div className="profile-img">
          <img src="/images/profile.jpg" alt="profile" />
        </div>
        <div className="info-content">
          <p>
            Hi! I'm Mingyu, a full-stack developer with experience designing and developing full-stack applications across multiple platforms using modern industry-adopted languages and frameworks. I have a strong passion for for problem solving, and working with users with challenging and sophisticated needs. Passionate, results-driven, and with abilities to adapt and work with others to solve complex problems and developing solutions that deliver best user experience.
          </p>
        </div>
      </div>
    </StyledAboutInfo>

  )
}

export default AboutInfo