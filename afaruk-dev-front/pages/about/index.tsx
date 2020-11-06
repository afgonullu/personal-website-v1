import Link from "next/link"
import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import { Container } from "react-bootstrap"

// what i have done, tech stack, skills, timeline
//main column and sidebar, on mobile sidebar comes first. sidebar has skills and tech stack, main column timeline.
const About: React.FC = (props) => {
  return (
    <React.Fragment>
      <SiteNavbar></SiteNavbar>
      <Container>
        <Link href="/">
          <a>Go Back</a>
        </Link>
        <h1>About Me</h1>
      </Container>
    </React.Fragment>
  )
}

export default About
