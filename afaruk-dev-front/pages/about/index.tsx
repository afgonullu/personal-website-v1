import Link from "next/link"
import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import { Container } from "react-bootstrap"

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
