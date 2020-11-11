import Link from "next/link"
import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import PageHeader from "../components/PageHeader/PageHeader"
import SiteFooter from "../components/SiteFooter/SiteFooter"
import { getAllTags, getPostsByTag } from "../api/ghost"
import { Post } from "../index"
import { Card, Col, Container, Row } from "react-bootstrap"
import IconsGenerator from "pages/components/IconsGenerator/Icons"
import { basename } from "path"

export const getStaticProps = async ({ params }) => {
  const posts = await getPostsByTag("writings")
  const tags = await getAllTags()
  return {
    props: { posts, tags },
    revalidate: 10,
  }
}

const Blog: React.FC<{ posts: Post[]; tags: [{ name: string }] }> = (props) => {
  const { posts, tags } = props
  const pageHeader = {
    title: "Writings",
    subtitle:
      'Benjamin Franklin said: "Either write something worth reading or do something worth writing." I try my best to live by it. I strive to do things worth writing about, then write about them. Hopefully my writings are worth reading.',
  }

  return (
    <React.Fragment>
      <SiteNavbar></SiteNavbar>
      <PageHeader
        title={pageHeader.title}
        subtitle={pageHeader.subtitle}
      ></PageHeader>
      <Container>
        {/* <ul className="tag-cloud">
          {tags.map((tag, index) => {
            return (
              <li key={tag.name} className="tag-cloud-item">
                <Link href="#">
                  <a>{tag.name}</a>
                </Link>
              </li>
            )
          })}
        </ul> */}
        <div className="writings posts-list">
          {posts.map((post, index) => {
            return (
              <Card className="posts-list-item" key={post.slug}>
                <Row className="g-0">
                  <Col md="3" className="post-tech">
                    <img src={post.feature_image} alt={post.title} />
                  </Col>
                  <Col md="9">
                    <Card.Body>
                      <Card.Title>
                        <Link
                          href="writings/[slug]"
                          as={`/writings/${post.slug}`}
                        >
                          <h5 className="post-title">{post.title}</h5>
                        </Link>
                      </Card.Title>
                      <Card.Text className="text-muted read-time">
                        {post.reading_time} min Read |{" "}
                        {post.updated_at.slice(0, 4)}.
                        {post.updated_at.slice(5, 7)}.
                        {post.updated_at.slice(8, 10)}
                      </Card.Text>
                      <Card.Text className="post-excerpt">
                        {post.custom_excerpt}
                      </Card.Text>
                    </Card.Body>
                  </Col>
                  {/* <Col md="7">
                    <p className="post-excerpt">{post.custom_excerpt}</p>
                  </Col> */}
                </Row>
              </Card>
            )
          })}
        </div>
      </Container>
      <SiteFooter></SiteFooter>
    </React.Fragment>
  )
}

export default Blog
