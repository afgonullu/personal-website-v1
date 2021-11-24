import React from "react"
import { Container } from "react-bootstrap"

const PageHeader = (props) => {
  return (
    <section className="page-header">
      <Container>
        <p className="display-3">{props.title}</p>
        <p className="lead">{props.subtitle}</p>
      </Container>
    </section>
  )
}

export default PageHeader
