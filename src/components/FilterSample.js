import React from 'react'
import { Form, Container, Row, Col } from "react-bootstrap";
import { useDataItems } from "../contexts/dataItems-context"


const FilterSample = ({list, path}) => {
  const { coursesData, resourcesData, setFilteredCoursesData, setFilteredResourcesData  } = useDataItems()
  const [ searchValue, setSearchValue ] = React.useState("")
  const [ topics, setTopics ] = React.useState({all: true, react: false, react_native: false, redux: false, graphql: false, pathway: false, job_search: false, podcasts: false, resources: false, html_css: false })

  const FilterSearch = (data, search) => {
    let newData = {}
    for (let [key, value] of Object.entries(data)) {
      let newValue = value.filter(item =>
        (item.name+item.description)
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      newData = {...newData, [key]: newValue}
    }
    return newData
  }


  const FilterData = (data, topics) => {
    let newData = {}
    for (let [key, value] of Object.entries(topics)) {
      if (key === "all" && value === true) {
        return data
      }
      if (list.includes(key) && value === true) {
        newData = {...newData, [key]: data[key]}
      }
    }
    return newData
  }


  const handleChange = (e) => {
    let valueS = ""
    const { type, checked, value, id} = e.target
    setTopics(topics => ({...topics, [id]: checked }))
    if (type==="text") {
      setSearchValue(value)
      valueS = value
    }
    if (path === "/courses") {
      setFilteredCoursesData(FilterSearch(FilterData(coursesData, {...topics, [id]: checked }), valueS))
    }
    if (path === "/resources") {
      setFilteredResourcesData(FilterSearch(FilterData(resourcesData, {...topics, [id]: checked }), valueS))
    }
  }


  return (
    <Form className="mx-1">
      <Container className="bg-dark rounded p-3 px-lg-5 mx-auto my-3">
        <Row>
          <Col md={6} className="my-1">
            <Form.Check
              id="all" type='checkbox' custom inline name="Filter"
              label={<img style={{height: "17px", filter:"brightness(0) invert(1)"}} src={require("../images/all.png")} alt="all"></img>}
              checked={topics["all"]}
              onChange={handleChange}
            />
            {list.map(name =>
              <Form.Check
                key={name} id={name} type='checkbox' custom inline name="Filter"
                label={<img style={{height: "17px", filter:"brightness(0) invert(1)"}} src={require(`../images/${name}.${ path === "/courses" ? "png" : "svg"}`)} alt={name}></img>}
                checked={topics[name]}
                onChange={handleChange}
              />
            )}
          </Col>
          <Col md={6} className="my-1">
            <input id="search" type="text" placeholder="Search by content"
              className="rounded w-100 pl-2"
              value={searchValue}
              onChange={handleChange}
            />
          </Col>
        </Row>
      </Container>
    </Form>
  )
}


export default FilterSample
