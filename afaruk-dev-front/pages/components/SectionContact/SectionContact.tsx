import React from "react"
import Link from "next/link"
import { Container, Row, Col, Button } from "react-bootstrap"

const SectionContact: React.FC = (props) => {
  return (
    <section className="section-contact text-dark">
      <Container className="px-5 py-5 bg-info">
        <Row className="d-flex justify-content-between align-items-center">
          <Col md="3" className="contact-title">
            <p className="display-6">
              Let's Talk About{" "}
              <span className="text-decoration-underline">Your Project</span>
            </p>
          </Col>
          <Col md="6" className="contact-text">
            Interested in Working Together?{" "}
          </Col>
          <Col md="3" className="contact-cta">
            <Button variant="primary" size="lg">
              Get in Touch
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SectionContact
