import React from "react"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"

const SectionAbout: React.FC = (props) => {
  return (
    <section className="section-about text-dark my-3 py-3">
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
            <h3>About Me</h3>
            <p className="lead">
              I was a Project Manager/Systems Engineer for more than 10 years.
              During that time, I had extensive experience in engineering,
              process and product management. You can see all the details in my
              resume.
            </p>
            <p>
              I have always had in my mind to make a career change to software
              industry. I believed for quite some time that coding is the most
              asymmetric advantage one can have in Internet Era.
            </p>
            <p>
              During COVID lockdown in March 2020, I finally made the leap and
              started studying web development. And I realized that my
              neverending interest in coding (dating back to 1996) is a great
              advantage. Those experiences provided me a solid foundation.
            </p>
            <p>
              I am relentlessly passionate about design, architecture and
              software engineering paradigms and constantly looking to put my
              skills and experience to a new and interesting challenge in
              software industry.
            </p>
            <Link href="/about">Find Out More</Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SectionAbout
