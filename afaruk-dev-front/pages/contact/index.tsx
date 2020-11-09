import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import PageHeader from "../components/PageHeader/PageHeader"
import SiteFooter from "../components/SiteFooter/SiteFooter"
import { Col, Container, Row } from "react-bootstrap"
import { Post } from "../index"
import { getPageByTag } from "pages/api/ghost"

export const getStaticProps = async ({ params }) => {
  const page = await getPageByTag("contact")
  return {
    props: { page },
    revalidate: 10,
  }
}

const Contact: React.FC<{ page: Post }> = (props) => {
  const pageHeader = {
    title: "Let's Connect",
    subtitle:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ut esse eius corrupti, deserunt sint cupiditate illum aliquam natus, ipsa quas optio voluptatibus nesciunt deleniti beatae totam ea aperiam nihil. Quia recusandae unde possimus architecto?",
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

export default Contact
