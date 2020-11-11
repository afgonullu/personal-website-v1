import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import PageHeader from "../components/PageHeader/PageHeader"
import SiteFooter from "../components/SiteFooter/SiteFooter"
import IconsGenerator from "../components/IconsGenerator/Icons"
import { getAllTags, getPostsByTag } from "../api/ghost"
import { Post } from "../index"
import { Row, Col, Container } from "react-bootstrap"
import Link from "next/link"

export const getStaticProps = async ({ params }) => {
  const posts = await getPostsByTag("projects")
  const tags = await getAllTags()
  return {
    props: { posts, tags },
    revalidate: 10,
  }
}

const Portfolio: React.FC<{ posts: Post[]; tags: [{ name: string }] }> = (
  props
) => {
  const { posts, tags } = props

  const pageHeader = {
    title: "Projects So Far",
    subtitle:
      "Check out projects that I have completed and been working on. You will find the technologies I used, a link to a live demo and showcase documentation for each project. Still want to know more? Contact me for more information.",
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
        <div className="projects posts-list">
          {posts.map((post, index) => {
            return (
              <Row className="posts-list-item d-flex align-items-baseline">
                <Col md="1" className="post-tech">
                  <IconsGenerator portfolio={post}></IconsGenerator>
                </Col>
                <Col md="3">
                  <Link href="projects/[slug]" as={`/projects/${post.slug}`}>
                    <h5 className="post-title">{post.title}</h5>
                  </Link>
                  <p className="text-muted read-time">
                    {post.reading_time} min Read
                  </p>
                </Col>
                <Col md="8">
                  <p className="post-excerpt">{post.custom_excerpt}</p>
                </Col>
              </Row>

              // <li key={post.slug}>
              //   <Link href="projects/[slug]" as={`/projects/${post.slug}`}>
              //     <a>{post.title}</a>
              //   </Link>
              // </li>
            )
          })}
        </div>
      </Container>
      <SiteFooter></SiteFooter>
    </React.Fragment>
  )
}

export default Portfolio
