import React from "react"
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap"

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
            <a href="https://www.github.com/afgonullu" target="_blank">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="github"
              >
                <title>Follow me on GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/afgonullu/" target="_blank">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="linkedin"
              >
                <title>Connect on LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://stackoverflow.com/users/3269761/afgonullu"
              target="_blank"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="stackoverflow"
              >
                <title>Stack Overflow Profile</title>
                <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z" />
              </svg>
            </a>
            <a href="https://twitter.com/afgonullu" target="_blank">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="twitter"
              >
                <title>Follow me on Twitter</title>
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
            </a>
            <a href="mailto:af@gonul.lu">
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="mail"
              >
                <title>Contact via Mail</title>
                <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
              </svg>
            </a>
          </Col>
          <Col md="3">
            <Nav defaultActiveKey="/home" className="flex-column">
              <h6>Site Map</h6>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
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
