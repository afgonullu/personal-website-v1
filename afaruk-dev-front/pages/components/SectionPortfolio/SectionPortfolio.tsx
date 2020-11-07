import React from "react"
import Link from "next/link"
import Icons from "./Icons"
import SectionHeader from "../SectionHeader/SectionHeader"
import { Card, Button, Container, CardGroup } from "react-bootstrap"
import { Post } from "../../index"

const SectionPortfolio: React.FC<{ portfolioPosts: Post[] }> = (props) => {
  const { portfolioPosts } = props

  const copyText = {
    title: "Recent Projects",
    text:
      "Below you will see some of my featured works and finished projects. I design and develop each project using best practices and modern technologies such as React, Next.js, Node.js, Express, Bootstrap, etc.",
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
          <img
            src="https://source.unsplash.com/random/320x160"
            className="card-img-top"
            alt="img"
          ></img>
          <Icons portfolio={portfolio} />
          <Card.Body>
            <Card.Title className="text-primary">{portfolio.title}</Card.Title>
            <Card.Text>{portfolio.custom_excerpt}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-primary">See Showcase</Button>
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
          <Link href="/portfolio">
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

export default SectionPortfolio
