import Link from "next/link"
import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import SiteFooter from "../components/SiteFooter/SiteFooter"
import { Container } from "react-bootstrap"

const Workflow: React.FC = (props) => {
  return (
    <React.Fragment>
      <SiteNavbar></SiteNavbar>
      <Container>
        <Link href="/">
          <a>Go Back</a>
        </Link>
        <h1>Workflow</h1>
      </Container>
      <SiteFooter></SiteFooter>
    </React.Fragment>
  )
}

export default Workflow
