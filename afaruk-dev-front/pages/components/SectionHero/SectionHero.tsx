import React from "react"
import Link from "next/link"
import { Container, Row, Col, Button, Jumbotron } from "react-bootstrap"

const SectionHero: React.FC = (props) => {
  return (
    <section className="section-hero text-light">
      <Container>
        <Jumbotron fluid>
          <Row className="d-flex justify-content-between align-items-center">
            <Col md="7">
              <h5>HI, I AM ABDULLAH 👋</h5>
              <h1>I Design And Develop Modern Web Applications.</h1>
              <p className="lead">
                Resolving problems into beautifully crafted solutions is an
                intrinsic drive for me. That helped me build sustainable and
                efficient products and operations in the past. Now I build on
                the internet, with code.
              </p>
              <Button className="mr-3" variant="secondary">
                Check Out My Works
              </Button>
              <Link href="#">My Resume</Link>
            </Col>
            <Col md="5" className="d-none d-md-block">
              <img
                className="headshot img-fluid ml-auto d-block"
                src="/assets/images/headshot.jpg"
                alt="A Faruk Gonullu Headshot"
              />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </section>
  )
}

export default SectionHero
