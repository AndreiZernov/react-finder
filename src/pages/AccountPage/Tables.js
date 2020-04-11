import React from 'react'
import { DataItemsConsumer } from "../../contexts/dataItems-context"
import { Row, Col, Card } from 'react-bootstrap'
import ItemsTable from '../../components/Account/ItemsTable'


const Tables = () =>
    <DataItemsConsumer>
      {({coursesData, resourcesData}) =>
        <>
          <Row className="justify-content-between">
            <Col border="secondary" bg="dark" as={Card} className="mx-auto p-2 my-3">
              <h1 className="text-center mb-0 h2">Courses</h1>
              <ItemsTable data={coursesData} />
            </Col>
          </Row>

          <Row className="justify-content-between">
            {ResourcesTables.map(resourseTable =>
              <Col key={resourseTable.name} border="secondary" bg="dark" as={Card} lg={5} className="mx-md-auto mx-1 p-2 mb-5">
                <h3 className="text-center mb-0 h2">{resourseTable.title}</h3>
                <ItemsTable data={FilterResourcesData(resourcesData, resourseTable.name)} />
              </Col>
            )}
          </Row>
        </>
      }
    </DataItemsConsumer>


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


export default Tables
