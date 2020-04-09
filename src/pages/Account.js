import React from 'react'
import { AppConsumer } from "../context"
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
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
            <Row className="justify-content-between">
              <Col lg={6}  border="secondary" bg="dark" as={Card} className="mx-auto d-flex flex-column" >
                <h1 className="text-center">Profile</h1>
              </Col>

              <Col lg={6}  className="d-flex flex-column" >
                <Button className="my-1 rounded" size="lg" variant="dark">Edit Profile</Button>
                <Button className="my-1 rounded" size="lg" variant="dark">Add Your Links</Button>
                <Button className="my-1 rounded" size="lg" variant="dark">Add Your Projects</Button>
                <Button className="my-1 rounded" size="lg" variant="dark">Contact Us</Button>
                <Button className="my-1 rounded" size="lg" variant="dark">Settings</Button>
              </Col>
            </Row>
            <Row className="justify-content-between">
              <Col border="secondary" bg="dark" as={Card} className="mx-auto p-2 my-5">
                <h1 className="text-center mb-0">Courses</h1>
                <CourseTable data={coursesData} />
              </Col>
            </Row>

            <Row className="justify-content-between">
              <Col border="secondary" bg="dark" as={Card} lg={5} className="mx-auto p-2 mb-5 ">
                <h3 className="text-center mb-0">Job and Freelance Search</h3>
                <CourseTable data={FilterResourcesData(resourcesData, "job_search")} />
              </Col>
              <Col border="secondary" bg="dark" as={Card} lg={5} className="mx-auto p-2 mb-5 ">
                <h3 className="text-center mb-0">React Podcast Channels</h3>
                <CourseTable data={FilterResourcesData(resourcesData, "podcasts")} />
              </Col>
              <Col border="secondary" bg="dark" as={Card} lg={5} className="mx-auto p-2 mb-5 ">
                <h3 className="text-center mb-0">HTML and CSS links</h3>
                <CourseTable data={FilterResourcesData(resourcesData, "html_css")} />
              </Col>
              <Col border="secondary" bg="dark" as={Card} lg={5} className="mx-auto p-2 mb-5 ">
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
