import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function MyFooter() {
  return (
    <Container fluid className="fixed-bottom p-5 bg-warning">
      <Row>
        <Col className=" d-flex justify-content-center ">
          <div>
            Dart Pippo, generale delle legioni Pippex, comandante dell'esercito dei Pippi. Servo leale dell'univo vero
            Imperatore Pippo Aurelio.
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default MyFooter;
