import React from "react"
import Link from "next/link"
import { Card, Button, Container, CardGroup } from "react-bootstrap"
import { Post } from "../../index"

const SectionBlog: React.FC<{ blogPosts: Post[] }> = (props) => {
  const { blogPosts } = props

  let cards = []
  if (blogPosts == undefined) {
    cards = [1, 2, 3]
  } else {
    cards = blogPosts.map((blog, i) => {
      return (
        <Card
          bg="info"
          text="dark"
          className="text-center m-2"
          key={blog.title}
        >
          <img
            src="https://source.unsplash.com/random/320x160"
            className="card-img-top"
            alt="img"
          ></img>
          <Card.Body>
            <Card.Title className="text-danger">{blog.title}</Card.Title>
            <Card.Text>{blog.custom_excerpt}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-danger">See Showcase</Button>
          </Card.Footer>
        </Card>
      )
    })
  }

  return (
    <section className="section-blog text-light text-center my-3 py-3">
      <Container>
        <div className="mx-5 px-5">
          <h3>You Might Be Interested To Read</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            cumque facere nobis. Magni inventore, id quia consequatur rerum,
            nostrum soluta voluptates libero nobis quibusdam repellat et quas
            quaerat dignissimos.
          </p>
        </div>
        <CardGroup className="mb-3">{cards}</CardGroup>
        <p className="lead">
          <Link href="#">
            <span>
              There are More Articles{" "}
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

export default SectionBlog