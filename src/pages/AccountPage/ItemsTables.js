import React from 'react'
import { AppConsumer } from "../../context"
import { Row, Col, Card } from 'react-bootstrap'
import CourseTable from '../../components/Account/CourseTable'


const ItemsTables = () =>
    <AppConsumer>
      {({coursesData, resourcesData}) =>
        <>
          <Row className="justify-content-between">
            <Col border="secondary" bg="dark" as={Card} className="mx-auto p-2 my-3">
              <h1 className="text-center mb-0 h2">Courses</h1>
              <CourseTable data={coursesData} />
            </Col>
          </Row>

          <Row className="justify-content-between">
            {ResourcesTables.map(resTable =>
              <Col key={resTable.name} border="secondary" bg="dark" as={Card} lg={5} className="mx-md-auto mx-1 p-2 mb-5">
                <h3 className="text-center mb-0 h2">{resTable.title}</h3>
                <CourseTable data={FilterResourcesData(resourcesData, resTable.name)} />
              </Col>
            )}
          </Row>
        </>
      }
    </AppConsumer>


const FilterResourcesData = (data, check) => {
  let newData = {}
  for (let [key, value] of Object.entries(data)) {
    if (key === check) newData = {...newData, [key]: value}
  }
  return newData
}


const ResourcesTables = [
  { name: "job_search", title: "Job and Freelance Search" },
  { name: "podcasts", title: "React Podcast Channels" },
  { name: "html_css", title: "HTML and CSS links" },
  { name: "resources", title: "React Helpful Resources" }
]


export default ItemsTables
