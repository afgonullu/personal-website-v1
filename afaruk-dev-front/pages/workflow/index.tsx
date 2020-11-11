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
      "Success, Quality, Repeatability and Customer Satisfaction comes from a well defined process. Such process would be simple, robust, efficient, documented and well communicated. Because of a good process, you can do, measure and improve. It makes every stakeholder's life so much easier. I aim to keep everything transparent, clearly identified and documented for myself as well as for my customers.",
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
