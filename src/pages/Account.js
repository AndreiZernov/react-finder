import React from 'react'
import { AppConsumer } from "../context"
import { Container, Row, Col } from 'react-bootstrap'
import CourseTable from '../components/CourseTable'
import Recommend from '../components/Recommend'


const Account = () => {

  const FilterResourcesData = (data, check) => {
    let newData = {}
    for (let [key, value] of Object.entries(data)) {
      if (key === check) newData = {...newData, [key]: value}
    }
    return newData
  }

  return (
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
            <Row className="align-items-start">
              <Col lg={6} className="">
                <h3 className="text-center mb-0">Job and Freelance Search</h3>
                <CourseTable data={FilterResourcesData(resourcesData, "job_search")} />
              </Col>
              <Col lg={6} className="">
                <h3 className="text-center mb-0">React Podcast Channels</h3>
                <CourseTable data={FilterResourcesData(resourcesData, "podcasts")} />
              </Col>
              <Col lg={6} className="">
                <h3 className="text-center mb-0">HTML and CSS links</h3>
                <CourseTable data={FilterResourcesData(resourcesData, "html_css")} />
              </Col>
              <Col lg={6} className="">
                <h3 className="text-center mb-0">React Helpful Resources</h3>
                <CourseTable data={FilterResourcesData(resourcesData, "resources")} />
              </Col>
            </Row>
          </Container>

          <Recommend />

        </>
      }
    </AppConsumer>

  )
}


export default Account
