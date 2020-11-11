import React from "react"
import Link from "next/link"
import IconsGenerator from "../IconsGenerator/Icons"
import SectionHeader from "../SectionHeader/SectionHeader"
import { Card, Button, Container, CardGroup } from "react-bootstrap"
import { Post } from "../../index"

const SectionProjects: React.FC<{ portfolioPosts: Post[] }> = (props) => {
  const { portfolioPosts } = props

  const copyText = {
    title: "Recent Projects",
    text:
      "Below are some of the projects I want you to see. I always aim for the best and always design and develop using best practices and modern technologies. One thing to mention is that I love JavaScript. Mostly I use Typescript, React, Next.js, Node.js, Express and Bootstrap in my projects.",
  }

  let cards = []
  if (portfolioPosts == undefined) {
    cards = [1, 2, 3]
  } else {
    cards = portfolioPosts.map((portfolio, i) => {
      return (
        <Card
          bg="light"
          text="dark"
          className="text-center m-2"
          key={portfolio.title}
        >
          <div className="img-parent">
            <img
              src="https://source.unsplash.com/random/320x160"
              className="card-img-top"
              alt="img"
            ></img>
            <div className="card-img-overlay">
              <IconsGenerator portfolio={portfolio} />
            </div>
          </div>
          <Card.Body>
            <Card.Title className="text-primary">{portfolio.title}</Card.Title>
            <Card.Text>{portfolio.custom_excerpt}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-primary">
              <Link href="projects/[slug]" as={`/projects/${portfolio.slug}`}>
                <p>See Showcase</p>
              </Link>
            </Button>
          </Card.Footer>
        </Card>
      )
    })
  }

  return (
    <section className="section-portfolio text-light text-center">
      <Container>
        <SectionHeader
          title={copyText.title}
          text={copyText.text}
        ></SectionHeader>
        <CardGroup className="mb-4">{cards}</CardGroup>
        <p className="secondary-link text-secondary">
          <Link href="/projects">
            <span>
              Full List of Projects{" "}
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
        </p>
      </Container>
    </section>
  )
}

export default SectionProjects
