import React from "react"
import SocialLinks from "../SocialLinks/SocialLinks"
import { Container, Row, Col, Nav } from "react-bootstrap"

const SiteFooter: React.FC = (props) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md="6">
            <p>
              These are some of the places you can find and follow me on the
              internet. You can also email me, if you prefer. Nevertheless, I
              will try to reply as soon as I can.
            </p>
            <SocialLinks></SocialLinks>
          </Col>
          <Col md="3">
            <Nav defaultActiveKey="/home" className="flex-column">
              <h6>Site Map</h6>
              <Nav.Link href="/writings">Writings</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/workflow">Workflow</Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>
              <Nav.Link href="/contact">Get in Touch</Nav.Link>
            </Nav>
          </Col>
          <Col className="footer-brand" md="3">
            <img
              alt=""
              src="/assets/logo.svg"
              width="66.63px"
              height="40px"
              className="d-inline-block"
            />
          </Col>
        </Row>
      </Container>
      <div className="attribute">
        <Container>
          <span>
            &copy;2020 <a href="https://afaruk.dev">A Faruk Gonullu</a>.{" "}
          </span>
          <span>
            Built with ❤️ and also with{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            hosted on{" "}
            <a href="https://vercel.com/" target="_blank">
              Vercel
            </a>
            ,{" "}
            <a href="https://ghost.org/" target="_blank">
              Ghost CMS
            </a>{" "}
            hosted on{" "}
            <a href="https://heroku.com/" target="_blank">
              Heroku
            </a>
            ,{" "}
            <a href="https://v5.getbootstrap.com" target="_blank">
              Bootstrap
            </a>{" "}
            and other libraries. Check out the{" "}
            <a
              href="https://github.com/afgonullu/personal-website-v1"
              target="_blank"
            >
              Github Repo
            </a>
            .{" "}
          </span>
        </Container>
      </div>
    </footer>
  )
}

export default SiteFooter
