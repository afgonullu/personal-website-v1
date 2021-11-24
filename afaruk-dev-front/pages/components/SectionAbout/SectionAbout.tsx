import React from "react"
import Link from "next/link"
import { Container, Row, Col } from "react-bootstrap"

const SectionAbout: React.FC = (props) => {
  return (
    <section className="section-about text-dark row d-flex">
      <Col md="5" className="d-none d-md-block"></Col>
      <Col md="7">
        <h3>About Me</h3>
        <p className="lead">
          I am an engineer by trade and a problem solver by nature. I enjoy
          working on problems, creating elegant solutions and improving
          processes around me; to make the world a little bit better for
          everyone. I happen to be building applications.
        </p>
        <p>
          I was a Project Manager/Systems Engineer for more than 10 years. My
          responsibilities included but not limited to R&D, systems engineering,
          project planning, project management, team leading, etc. Throughout my
          professional career, I gained extensive experience in engineering,
          process and product management. You can see all the details in my{" "}
          <a href="/assets/docs/resume_afgonullu.pdf" target="_blank">
            resume
          </a>
          .
        </p>
        <p>
          I have always had in my mind to make a career change to software
          industry. I believed for quite some time that coding and building for
          the web are the most asymmetric advantages one can have in Internet
          Era.
        </p>
        <p>
          During COVID lockdown in March 2020, I finally made the leap and
          started studying web development. And I realized that my neverending
          interest in coding (dating back to 1996) became a great advantage.
          Those experiences provided me a solid foundation. Now I building
          things that live on the internet, while I continue learning new stuff
          everyday and educate myself without a break.
        </p>
        <p>
          I like to think that I possess polymathic thinking skills and one day
          I hope to proudly call myself a polymath. I am relentlessly passionate
          about design, architecture and software engineering paradigms and
          constantly looking to put my skills and experience to a new and
          interesting challenge.
        </p>

        <Link href="/about">
          <span className="secondary-link text-dark">
            Find Out More{" "}
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-right"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </span>
        </Link>
      </Col>
    </section>
  )
}

export default SectionAbout
