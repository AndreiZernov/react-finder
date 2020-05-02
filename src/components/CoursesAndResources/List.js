import React from "react";
import Item from "./Item";
import { Container, Col, Row } from "react-bootstrap";

const List = ({ data }) => (
  <Container className="my-4 d-grid align-items-center justify-content-center text-center">
    <Row className="m-auto">
      {data
        .filter(item => item)
        .map((item, i) => (
          <Col key={i} sm={6} md={4} xl={3}>
            <Item data={item} />
          </Col>
        ))}
    </Row>
  </Container>
);

export default List;
