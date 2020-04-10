import React from 'react'
import { Container, Col, Row} from 'react-bootstrap'
import { useLocation, Link } from "react-router-dom"
import About from '../components/About'
import QuickFacts from '../data/QuickFacts'
import ItemsLinks from '../components/CoursesAndResources/ItemsLinks'



const OverviewPage = () => {
  let id = useLocation().pathname.substr(1)
  return (
    <div className="py-3 pt-xl-5">
      <About
        title={QuickFacts[id].title}
        subtitle={QuickFacts[id].subtitle}
        list={QuickFacts[id].list}
      />
      <Container className="d-grid justify-content-between px-2 px-lg-5 text-center">
        <Row>
          <Col lg={6}>
            <Link className="text-light h2" to="/courses">Courses</Link>
            <ItemsLinks
              path="/courses"
              url="/courses"
              list={[ "react", "react_native", "redux", "graphql", "pathway" ]}
            />
          </Col>
          <Col lg={6}>
            <Link className="text-light h2" to="/resources">Helpfull Resources</Link>
            <ItemsLinks
              path="/resources"
              url="/resources"
              list={[ "job_search", "podcasts", "resources", "html_css" ]}
            />
          </Col>
        </Row>
      </Container>
      <p className="text-center mb-5 h5" style={{color:"tomato"}}><i>Fully immersed in Software Engineering. World traveller. Beer lover. Sincerely Yours Andrew Z.</i></p>
    </div>
  )
}


export default OverviewPage
