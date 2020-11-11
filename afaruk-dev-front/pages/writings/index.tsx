import Link from "next/link"
import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import PageHeader from "../components/PageHeader/PageHeader"
import SiteFooter from "../components/SiteFooter/SiteFooter"
import { getAllTags, getPostsByTag } from "../api/ghost"
import { Post } from "../index"
import { Col, Container, Row } from "react-bootstrap"
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
              <Row className="posts-list-item d-flex align-items-baseline">
                <Col
                  md="2"
                  className="post-tech"
                  style={{
                    background: `url(${post.feature_image}) auto top center`,
                  }}
                ></Col>
                <Col md="3">
                  <Link href="writings/[slug]" as={`/writings/${post.slug}`}>
                    <h5 className="post-title">{post.title}</h5>
                  </Link>
                  <p>{post.reading_time}</p>
                </Col>
                <Col md="7">
                  <p className="post-excerpt">{post.custom_excerpt}</p>
                </Col>
              </Row>
            )
          })}
        </div>
      </Container>
      <SiteFooter></SiteFooter>
    </React.Fragment>
  )
}

export default Blog
