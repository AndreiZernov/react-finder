import React, { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap"
import { AppConsumer } from "../../context"


const YourLinks = ({data, editData, onHide}) => {


  const [validated, setValidated] = useState(false);
  const [inputValue, setInputValue] = useState({id: "", parent1: "", price: "", author: "", name: "", description: "", link: "", duration: ""})

  useEffect(() => {
    if (data === "Edit") {
    setInputValue(editData)
  }}
  , [data, editData])

  const handleChange = (e) => {
    const {name, value} = e.target
    setInputValue(inputValue => ({...inputValue, [name]: value, id: `${inputValue.parent1}-${inputValue.name}` }))

  }


  return (
    <AppConsumer>
      {({ newCourses, setNewCourses, removeNewCourses}) => {


        const handleSubmit = (event) => {
          event.preventDefault();
          data === "Edit" && removeNewCourses(editData)
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          setValidated(true);
          setInputValue(inputValue => ({...inputValue, duration:
          `${inputValue.duration} hours` }))
          setNewCourses(newCourses => [...newCourses, inputValue])
          onHide()
        };

        return (
          <>
            <h2>Add your own Course</h2>
            <Form validated={validated} onSubmit={handleSubmit} className="d-flex flex-column form-group px-3"
            >
              <Form.Group controlId="validation1">
                <div className="mb-1 d-flex justify-content-center">
                  <Form.Control onChange={handleChange} style={{width: "20px"}} type="radio" required  name="price" value="free"/>
                  <label  htmlFor="free">Free</label>
                  <Form.Control onChange={handleChange} style={{width: "20px"}} type="radio" required name="price" value="paid"/>
                  <label  htmlFor="paid">Paid</label>
                </div>
                <select onChange={handleChange} required name="parent1" className="rounded my-1 p-2 w-100">
                  {selectList.map(item =>
                    <option key={item.value} value={item.value}>{item.name}</option>
                  )}
                </select>
                {inputList.map(item =>
                  <Form.Control onChange={handleChange} required key={item.name} value={inputValue[item.name]} className="rounded my-1 p-2" type={item.type} name={item.name} placeholder={item.placeholder}/>
                )}

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

              </Form.Group>
              <Button className="btn btn-success mt-1" type="submit">Submit</Button>
            </Form>
          </>


        )
      }
      }
    </AppConsumer>
  )
}


const selectList = [
  { value:"empty", name: "Please select topic"},
  { value:"react", name: "React"},
  { value:"react_native", name: "React Native"},
  { value:"redux", name: "Redux"},
  { value:"graphql", name: "GraphQL"},
  { value:"pathway", name: "Full Pathway"},
]

const inputList = [
  { name: "author", placeholder: "Course's Author", type: "text" },
  { name: "name", placeholder: "Course's Topic", type: "text" },
  { name: "description", placeholder: "Short Description", type: "text" },
  { name: "duration", placeholder: "Duration in Hours", type: "number" },
  { name: "link", placeholder: "URL address", type: "url" }
]


export default YourLinks
