import Link from "next/link"
import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import SiteFooter from "../components/SiteFooter/SiteFooter"
import { useRouter } from "next/router"
import { getSinglePost } from "../api/ghost"
import { Post } from "../index"
import { Container } from "react-bootstrap"

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug)
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

const BlogPost: React.FC<{ post: Post }> = (props) => {
  const { post } = props

  const router = useRouter()

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <React.Fragment>
      <SiteNavbar></SiteNavbar>
      <Container>
        <Link href="/">
          <a>Go Back</a>
        </Link>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </Container>
      <SiteFooter></SiteFooter>
    </React.Fragment>
  )
}

export default BlogPost
