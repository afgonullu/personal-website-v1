import React from "react"
import Link from "next/link"
import SectionHeader from "../SectionHeader/SectionHeader"
import { Card, Button, Container, CardGroup } from "react-bootstrap"
import { Post } from "../../index"

const SectionWritings: React.FC<{ blogPosts: Post[] }> = (props) => {
  const { blogPosts } = props

  const copyText = {
    title: "Recent Writings",
    text:
      "As a good practice, I try to document everything happening around me: my reflections, decision making processes, routines, etc. When I solve a problem, I formulise the solution in a repeatable manner and document it. Therefore, My writings may vary a lot, but you will find them very useful.",
  }

  let cards = []
  if (blogPosts == undefined) {
    cards = [1, 2, 3]
  } else {
    cards = blogPosts.map((blog, i) => {
      return (
        <Link
          key={blog.slug}
          href="writings/[slug]"
          as={`/writings/${blog.slug}`}
        >
          <Card bg="light" text="dark" className="text-center m-2">
            <img
              src={blog.feature_image}
              className="card-img-top"
              alt={blog.title}
            ></img>
            <Card.Body>
              <Card.Title className="text-danger">{blog.title}</Card.Title>
              <Card.Text className="text-muted read-time">
                {blog.reading_time} min Read | {blog.updated_at.slice(0, 4)}.
                {blog.updated_at.slice(5, 7)}.{blog.updated_at.slice(8, 10)}
              </Card.Text>
              <Card.Text>{blog.custom_excerpt}</Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
        </Link>
      )
    })
  }

  return (
    <section className="section-blog text-light text-center">
      <Container>
        <SectionHeader
          title={copyText.title}
          text={copyText.text}
        ></SectionHeader>
        <p className="text-danger secondary-link">
          I have just finished implementing this website. I am filling out the
          content 24/7. Therefore you may see some placeholder content here and
          there. If you visit tomorrow, you will see new content and a more
          complete website. Please bear with me while I create new valuable
          content.{" "}
        </p>
        <CardGroup className="mb-4">{cards}</CardGroup>
        <p className="lead">
          <Link href="/writings">
            <span className="text-danger secondary-link">
              Full List of Writings{" "}
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

export default SectionWritings
