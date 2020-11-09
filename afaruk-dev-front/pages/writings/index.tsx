import Link from "next/link"
import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import PageHeader from "../components/PageHeader/PageHeader"
import SiteFooter from "../components/SiteFooter/SiteFooter"
import { getAllTags, getPostsByTag } from "../api/ghost"
import { Post } from "../index"
import { Col, Container, Row } from "react-bootstrap"
import IconsGenerator from "pages/components/IconsGenerator/Icons"

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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dicta laboriosam vel alias asperiores, quasi excepturi doloremque sit consectetur quibusdam? Sit aut perspiciatis labore temporibus quibusdam iure, omnis blanditiis odit illo unde deleniti ipsum velit neque asperiores, natus ipsa beatae? Ratione velit mollitia possimus vero nostrum commodi nemo doloribus nisi.",
  }

  return (
    <React.Fragment>
      <SiteNavbar></SiteNavbar>
      <PageHeader
        title={pageHeader.title}
        subtitle={pageHeader.subtitle}
      ></PageHeader>
      <Container>
        <ul className="tag-cloud">
          {tags.map((tag, index) => {
            return (
              <li key={tag.name} className="tag-cloud-item">
                <Link href="#">
                  <a>{tag.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="posts-list">
          {posts.map((post, index) => {
            return (
              <Row className="posts-list-item d-flex align-items-baseline">
                <Col md="1" className="post-tech">
                  <IconsGenerator portfolio={post}></IconsGenerator>
                </Col>
                <Col md="3">
                  <Link href="writings/[slug]" as={`/writings/${post.slug}`}>
                    <h5 className="post-title">{post.title}</h5>
                  </Link>
                </Col>
                <Col md="8">
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
