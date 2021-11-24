import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import PageHeader from "../components/PageHeader/PageHeader"
import SocialLinks from "../components/SocialLinks/SocialLinks"
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
      "I normally shy away from contact forms. They feel cold and I don't get to keep a record of them when I click submit. Therefore there is no contact form here. Just use social media or e-mail. It is much easier that way.",
  }

  return (
    <React.Fragment>
      <SiteNavbar></SiteNavbar>
      <PageHeader
        title={pageHeader.title}
        subtitle={pageHeader.subtitle}
      ></PageHeader>

      <Container className="contact-page-main-content">
        <SocialLinks></SocialLinks>
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
