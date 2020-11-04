import React from "react"
import { Card, Row, Button, Col, Container } from "react-bootstrap"

const SectionPortfolio: React.FC = (props) => {
  return (
    <section>
      <Container>
        <Row>
          <Col sm="6" lg="4" className="mb-4">
            <Card
              bg="info"
              // key={idx}
              text="dark"
              // style={{ width: "18rem" }}
              className="text-center"
            >
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title className="text-danger">
                  Special title treatment
                </Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">
                <Button variant="outline-danger">Go somewhere</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm="6" lg="4" className="mb-4">
            <Card
              bg="danger"
              // key={idx}
              text="light"
              className="text-center"
            >
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </Col>
          <Col sm="6" lg="4" className="mb-4">
            <Card
              bg="secondary"
              // key={idx}
              text="dark"
              className="text-center"
            >
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </Col>
          <Col sm="6" lg="4" className="mb-4">
            <Card
              bg="dark"
              // key={idx}
              text="light"
              className="text-center"
            >
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </Col>
          <Col sm="6" lg="4" className="mb-4">
            <Card
              bg="success"
              // key={idx}
              text="dark"
              className="text-center"
            >
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </Col>
          <Col sm="6" lg="4" className="mb-4">
            <Card
              bg="warning"
              // key={idx}
              text="dark"
              className="text-center"
            >
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </Col>
          <Col sm="6" lg="4" className="mb-4">
            <Card
              bg="light"
              // key={idx}
              text="dark"
              className="text-center"
            >
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default SectionPortfolio
