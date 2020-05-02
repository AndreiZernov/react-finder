import React, { useState, useEffect } from "react";
import { Form, Button, Accordion, Card } from "react-bootstrap";
import { useDataItems } from "../../contexts/dataItems-context";
import { ListCourses, ListResources } from "../../data/FormData";

const YourLinks = ({ data, editData, onHide }) => {
  const {
    newCourses,
    setNewCourses,
    removeNewCourses,
    removePickedItem
  } = useDataItems();

  const [validated, setValidated] = useState(false);

  const [inputValueCourse, setInputValueCourse] = useState({
    owner: "user",
    id: "",
    parent1: "",
    parent2: "coursesData",
    price: "",
    author: "",
    name: "",
    description: "",
    link: "",
    duration: ""
  });

  const [inputValueResource, setInputValueResource] = useState({
    owner: "user",
    id: "",
    parent1: "",
    parent2: "resourceData",
    name: "",
    description: "",
    link: ""
  });

  useEffect(() => {
    if (data === "Edit" && editData.parent2 === "coursesData") {
      setInputValueCourse(editData);
    }
    if (data === "Edit" && editData.parent2 === "resourcesData") {
      setInputValueResource(editData);
    }
  }, [data, editData]);

  const handleChange = event => {
    const { name, value, id } = event.target;
    id === "validation1" &&
      setInputValueCourse(inputValueCourse => ({
        ...inputValueCourse,
        [name]: value,
        id: `${inputValueCourse.parent1}-${inputValueCourse.name}`
      }));
    id === "validation2" &&
      setInputValueResource(inputValueCourse => ({
        ...inputValueCourse,
        [name]: value,
        id: `${inputValueCourse.parent1}-${inputValueCourse.name}`
      }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    data === "Edit" && newCourses.length !== 0 && removeNewCourses(editData);
    data === "Edit" &&
      removePickedItem(
        `${[editData.parent2]}-${[editData.parent1]}-${[editData.id]}`
      );

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    event.target.id === "validation1" &&
      setNewCourses(newCourses => [
        ...newCourses,
        {
          ...inputValueCourse,
          duration: `${inputValueCourse.duration} hours`,
          owner: "user"
        }
      ]);

    event.target.id === "validation2" &&
      setNewCourses(newCourses => [
        ...newCourses,
        { ...inputValueResource, owner: "user" }
      ]);

    onHide();
  };

  return (
    <Accordion
      defaultActiveKey={
        data === "Edit" && editData.parent2 === "resourcesData"
          ? "2"
          : data === "Add Your Links"
          ? "0"
          : "1"
      }
    >
      <p>
        {data === "Edit"
          ? "Please Edit Form Below!"
          : "Choose What you Would Like To Add First!"}
      </p>
      {YourLinksForms(inputValueCourse, inputValueResource).map(linkform => (
        <Card key={linkform.validation} bg="dark">
          <Card.Header>
            <Accordion.Toggle
              as={Card.Header}
              style={{ cursor: "pointer" }}
              variant="dark"
              eventKey={linkform.eventKey}
            >
              {linkform.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={linkform.eventKey}>
            <Card.Body>
              <Form
                validated={validated}
                onSubmit={handleSubmit}
                id={linkform.validation}
                className="d-flex flex-column form-group px-3"
              >
                <Form.Group controlId={linkform.validation}>
                  {linkform.validation === "validation1" && (
                    <div className="mb-1 d-flex justify-content-center">
                      <Form.Control
                        onChange={handleChange}
                        style={{ width: "20px" }}
                        type="radio"
                        required
                        name="price"
                        value="Free"
                      />
                      <label htmlFor="free">Free</label>
                      <Form.Control
                        onChange={handleChange}
                        style={{ width: "20px" }}
                        type="radio"
                        required
                        name="price"
                        value="Paid"
                      />
                      <label htmlFor="paid">Paid</label>
                    </div>
                  )}
                  <Form.Control
                    as="select"
                    value={linkform.state.parent1}
                    onChange={handleChange}
                    required
                    name="parent1"
                    className="rounded my-1 p-2 w-100"
                  >
                    {linkform.select.map(item => (
                      <option key={item.value} value={item.value}>
                        {item.name}
                      </option>
                    ))}
                  </Form.Control>
                  {linkform.input.map(item => (
                    <Form.Control
                      onChange={handleChange}
                      required
                      key={item.name}
                      value={linkform.state[item.name]}
                      className="rounded my-1 p-2"
                      type={item.type}
                      name={item.name}
                      placeholder={item.placeholder}
                    />
                  ))}
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Button className="btn btn-success mt-1" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

const YourLinksForms = (inputValueCourse, inputValueResource) => [
  {
    title: "Course Form",
    validation: "validation1",
    select: ListCourses.selectItems,
    input: ListCourses.inputItems,
    eventKey: "1",
    state: inputValueCourse
  },
  {
    title: "Resource Form",
    validation: "validation2",
    select: ListResources.selectItems,
    input: ListResources.inputItems,
    eventKey: "2",
    state: inputValueResource
  }
];

export default YourLinks;
