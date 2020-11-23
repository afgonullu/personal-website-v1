import Link from "next/link"
import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import PageHeader from "../components/PageHeader/PageHeader"
import SiteFooter from "../components/SiteFooter/SiteFooter"
import { useRouter } from "next/router"
import { getSinglePost } from "../api/ghost"
import { Post } from "../index"
import { Breadcrumb, Container } from "react-bootstrap"

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug)
  console.log(post)
  return {
    props: { post },
    revalidate: 10,
  }
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  }
}

const WritingsPost: React.FC<{ post: Post }> = (props) => {
  const { post } = props

  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <React.Fragment>
      <SiteNavbar></SiteNavbar>

      <PageHeader
        title={post.title}
        subtitle={post.custom_excerpt}
      ></PageHeader>
      <div
        style={{
          background: `url(${post.feature_image}) no-repeat top center`,
          height: "50vh",
          maxHeight: "480px",
          marginBottom: "2.441rem",
        }}
      ></div>
      <Container>
        <Breadcrumb className="text-dark">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/writings">Writings</Breadcrumb.Item>
          <Breadcrumb.Item active>{post.title}</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></div>
      </Container>
      <SiteFooter></SiteFooter>
    </React.Fragment>
  )
}

export default WritingsPost
