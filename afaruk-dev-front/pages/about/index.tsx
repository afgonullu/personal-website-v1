import React from "react"
import SiteNavbar from "../components/SiteNavbar/SiteNavbar"
import PageHeader from "../components/PageHeader/PageHeader"
import SiteFooter from "../components/SiteFooter/SiteFooter"
import { Col, Container, Row } from "react-bootstrap"
import { Post } from "../index"
import { getPageByTag } from "pages/api/ghost"

export const getStaticProps = async ({ params }) => {
  const page = await getPageByTag("about")
  return {
    props: { page },
    revalidate: 10,
  }
}

const About: React.FC<{ page: Post }> = (props) => {
  const pageHeader = {
    title: "My Journey So Far",
    subtitle:
      'I had a life full of experiences. I had my ups and downs as everyone else. Here are some of the highlights of the journey, which I call "my life". These won\'t do justice, and a lot of context and meaning maybe lost when things put into words. But as Marco Polo has said in his deathbed: "I did not write half of what I saw, for I knew I would not be believed"',
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

export default About
