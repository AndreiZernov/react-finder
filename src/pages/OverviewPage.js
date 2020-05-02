import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import About from "../components/About";
import ItemsLinks from "../components/CoursesAndResources/ItemsLinks";

const OverviewPage = () => (
  <div className="py-3 pt-xl-5 page">
    <About title={Title} subtitle={Content} />
    <Container className="d-grid justify-content-between px-2 px-lg-5 text-center">
      <Row>
        <Col lg={6}>
          <Link className="text-light h2" to="/courses">
            Courses
          </Link>
          <ItemsLinks
            path="/courses"
            url="/courses"
            list={["react", "react_native", "redux", "graphql", "pathway"]}
          />
        </Col>
        <Col lg={6}>
          <Link className="text-light h2" to="/resources">
            Helpfull Resources
          </Link>
          <ItemsLinks
            path="/resources"
            url="/resources"
            list={["job_search", "podcasts", "resources", "html_css"]}
          />
        </Col>
      </Row>
    </Container>
    <p className="text-center mb-5 h5" style={{ color: "tomato" }}>
      <i>
        Fully immersed in Software Engineering. World traveller. Beer lover.
        Sincerely Yours Andrew Z.
      </i>
    </p>
  </div>
);

const Title = "About React Finder";

const Content =
  "This is React Web Application with the integration of tools such as React Context and Hooks, Styled Components, Lottie Animations, Auth0 Authentication with easy Github and Google Login, QraphQl (all data published and managed at Contentful), Bootstrap component library, Responsive Design, Formspree form backend email service. \n Feel free to use this website to meet your personal learning goals as well as searching new career-changing opportunities. If you find this Web App useful, please share your experience with me on Twitter.";

export default OverviewPage;
