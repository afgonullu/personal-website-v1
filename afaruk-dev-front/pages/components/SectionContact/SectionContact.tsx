import React from "react"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"

const SectionContact: React.FC = (props) => {
  return (
    <section className="section-contact text-dark my-3 py-3">
      <Container>
        <Row className="d-flex justify-content-between align-items-center">
          <Col md="5" className="d-none d-md-block">
            <img
              className="headshot img-fluid ml-auto d-block"
              src="/assets/images/headshot.jpg"
              alt="A Faruk Gonullu Headshot"
            />
          </Col>
          <Col md="7">
            <h3>Contact Me</h3>
            <p className="lead">
              Resolving problems into beautifully crafted solutions is an
              intrinsic drive for me. That helped me build sustainable and
              efficient products and operations in the past. Now I build on the
              internet, with code.
            </p>
            <h4>I am On Social Media</h4>
            <div className="social-links">
              Twitter Github LinkedIn Codepen etc.
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              dolor, obcaecati numquam nulla earum nihil quod libero, blanditiis
              deleniti, mollitia saepe! Eos molestiae sequi corporis voluptates
              hic consequatur, iure obcaecati? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Omnis aperiam voluptas pariatur,
              provident unde consequatur assumenda quae dicta numquam eos velit,
              possimus fuga eius maiores{" "}
            </p>
            <p>
              harum molestiae magni eaque tempore. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Unde beatae dolorum suscipit maiores
              magni, facilis eos impedit ratione doloremque eum.
            </p>
            <Link href="/about">Find Out More</Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SectionContact
