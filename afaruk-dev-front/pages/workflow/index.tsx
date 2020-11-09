import Link from "next/link"
import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import PageHeader from "../components/PageHeader/PageHeader"
import SiteFooter from "../components/SiteFooter/SiteFooter"
import { Row, Col, Container } from "react-bootstrap"
import { Post } from "../index"
import { getPageByTag } from "pages/api/ghost"

export const getStaticProps = async ({ params }) => {
  const page = await getPageByTag("workflow")
  return {
    props: { page },
    revalidate: 10,
  }
}

const Workflow: React.FC<{ page: Post }> = (props) => {
  const pageHeader = {
    title: "Workflow",
    subtitle:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam ex blanditiis dicta dolor repudiandae velit voluptas numquam odio est repellendus quibusdam aut, laudantium nobis placeat excepturi obcaecati sed harum quisquam magnam asperiores laborum quos incidunt! Repellat ipsa rerum molestias culpa veniam! At, voluptatibus? Et architecto nostrum, molestiae inventore quam eum.",
  }

  return (
    <React.Fragment>
      <SiteNavbar></SiteNavbar>
      <PageHeader
        title={pageHeader.title}
        subtitle={pageHeader.subtitle}
      ></PageHeader>
      <Container className="page-main-content">
        <Row>
          <Col>
            <div dangerouslySetInnerHTML={{ __html: props.page[0].html }}></div>
          </Col>
        </Row>
      </Container>
      <SiteFooter></SiteFooter>
    </React.Fragment>
  )
}

export default Workflow
