import React from 'react'
import { AppConsumer } from "../context"
import { Container, Row, Col } from 'react-bootstrap'
import CourseTable from '../components/CourseTable'
import Recommend from '../components/Recommend'


const Account = () =>
  <AppConsumer>
    {({coursesData, resourcesData}) =>
      <>
        <Container className="py-5 my-5">
          <Row>
            <Col lg={6} className="">
              <h1 className="text-center mb-0">Courses</h1>
              <CourseTable data={coursesData} />
            </Col>
            <Col lg={6} className="">
              <h1 className="text-center mb-0">Resources</h1>
              <CourseTable data={resourcesData} />
            </Col>
          </Row>
        </Container>
        
        <Recommend />

      </>
    }
  </AppConsumer>


export default Account
