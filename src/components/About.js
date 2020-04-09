import React from 'react'
import { Container, Col, Row} from 'react-bootstrap'


const About = ({title, subtitle, list}) =>
  <Container className="align-items-center justify-content-center">
    <Row className="mt-5 p-xl-3">
      <Col xl={4} className="text-center display-4 m-auto py-2" style={{fontWeight: "600"}}>
        {title}
      </Col>
      <Col xl={8} className="m-auto">
        <Col className="text-justify m-auto" style={{ whiteSpace: "pre-line"}}>
          {subtitle}
        </Col>
        <Col>
          <ul className="mt-2">
            {list && list.map(item => <li key={item}>{item}</li>)}
          </ul>
        </Col>
      </Col>
    </Row>
  </Container>


export default About
