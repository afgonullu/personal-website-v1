import React from "react"
import Link from "next/link"
import { Card, Button, Container, CardGroup } from "react-bootstrap"
import { Post } from "../../index"

const SectionPortfolio: React.FC<{ portfolios: Post[] }> = (props) => {
  const { portfolios } = props

  const techStack = portfolios.map((portfolio) => portfolio.tags)

  const cards = portfolios.map((portfolio, i) => {
    return (
      <Card
        bg="light"
        // key={idx}
        text="dark"
        // style={{ width: "18rem" }}
        className="text-center m-3"
      >
        <img
          src="https://source.unsplash.com/random/320x160"
          className="card-img-top"
          alt="img"
        ></img>
        <div className="card-img-overlay">
          {/* I map tags into svg icons. I go over each tag name if using a switch statement, i replace the tag with corresponding svg. */}
          {portfolio.tags.map((tag) => {
            switch (tag.name) {
              case "javascript":
                return (
                  <svg
                    fill="#F7DF1E"
                    role="img"
                    viewBox="0 0 24 24"
                    width="16px"
                    height="16px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>JavaScript</title>
                    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                  </svg>
                )
                break
              default:
                return (
                  <svg
                    fill="#E34F26"
                    width="16px"
                    height="16px"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>HTML5</title>
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                  </svg>
                )
            }
          })}
        </div>
        <Card.Body>
          <Card.Title className="text-danger">{portfolio.title}</Card.Title>
          <Card.Text>{portfolio.custom_excerpt}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-danger">See Showcase</Button>
        </Card.Footer>
      </Card>
    )
  })

  return (
    <section className="featured-portfolio text-light text-center my-3 py-3">
      <Container>
        <h3>Featured Works</h3>
        <p>
          <strong>
            Below you will see some of my featured works and finished projects.
          </strong>
        </p>

        <CardGroup className="mb-3">{cards}</CardGroup>
        <p className="lead">
          <Link href="#">Check Out My Full Portfolio</Link>
        </p>
      </Container>
    </section>
  )
}

export default SectionPortfolio
