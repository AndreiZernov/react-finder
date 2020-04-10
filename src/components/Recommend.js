import React from 'react'
import { Modal, Button, Accordion, Card, Form } from 'react-bootstrap'


const Recommend = () => {
  const [ modalShow, setModalShow ] = React.useState(false);

  return (
    <>
      <Button variant="danger" className="rounded" onClick={() => setModalShow(true)}>
        RECOMMEND
      </Button>
      <MyModal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}


const MyModal = ({show, onHide}) => {
  return (
    <Modal size="lg" show={show} onHide={onHide} centered
      aria-labelledby="contained-modal-title-vcenter"
      className="text-light text-center"
    >
      <Modal.Body className="bg-dark rounded">
        <h1>RECOMMEND!</h1>
        <p>Please fill the form and I will add this course to list ASAP</p>
        <FormRecommend onHide={onHide}/>
        <Button className="text-align-right mt-2 btn btn-danger" onClick={onHide}>Close</Button>
      </Modal.Body>
    </Modal>
  );
}


const FormRecommend = ({onHide}) => {
  const [ status, setStatus ] = React.useState("")
  const [validated, setValidated] = React.useState(false)


  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
        setTimeout(()=>onHide(), 2000);
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  }

        const handleSubmit = (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          setValidated(true);
          submitForm(event)
        };


  return (
    <Accordion>
      <Card bg="dark">
        <Card.Header>
          <Accordion.Toggle as={Card.Header} style={{cursor:"pointer"}} variant="dark" eventKey="0">
            ADD COURSE
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Form
              validated={validated}
              onSubmit={handleSubmit}
              action="https://formspree.io/mqkdbqby"
              method="POST"
              className="d-flex flex-column form-group px-3"
            >
              <Form.Group controlId="validation1">
                <div className="my-1 d-inline">
                  <Form.Check type="radio" className="d-inline" name="price" value="free"/>
                  <label className="px-2 d-inline" htmlFor="free">Free</label>
                  <Form.Check type="radio" className="d-inline" name="price" value="paid"/>
                  <label className="px-2 d-inline" htmlFor="paid">Paid</label>
                </div>
                <Form.Control as="select" custom variant="dark" name="courses" className="rounded my-1 p-2">
                  {selectListCourse.map(item =>
                    <option key={item.value} value={item.value}>{item.name}</option>
                  )}
                </Form.Control>
                {inputListCourse.map(item =>
                  <Form.Control key={item.name} className="rounded my-1 p-2"  type={item.type} name={item.name} placeholder={item.placeholder}/>
                )}
                {status === "SUCCESS" ? <p className="text-success h5 my-2">Thanks!!!</p> : <Button className="btn btn-success w-100 mt-1" type="submit">Submit</Button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card bg="dark">
        <Card.Header>
          <Accordion.Toggle as={Card.Header} style={{cursor:"pointer"}} variant="dark" eventKey="1">
            ADD RESOURCE
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <Form
              validated={validated}
              onSubmit={handleSubmit}
              action="https://formspree.io/mqkdbqby"
              method="POST"
              className="form-group px-3"
            >
              <Form.Group className="d-flex flex-column form-group" controlId="validation1">
                <Form.Control as="select" custom variant="dark" name="courses" className="rounded my-1 p-2">
                  {selectListResource.map(item =>
                    <option key={item.value} value={item.value}>{item.name}</option>
                  )}
                </Form.Control>
                {inputListResource.map(item =>
                  <input key={item.name} className="rounded my-1 p-2"  type={item.type} name={item.name} placeholder={item.placeholder}/>
                )}
                {status === "SUCCESS" ? <p className="text-success h5 my-2">Thanks!!!</p> : <Button className="btn btn-success mt-1" type="submit">Submit</Button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

            </Form>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>


  )
}

const selectListCourse = [
  { value:"empty", name: "Please select topic"},
  { value:"react", name: "React"},
  { value:"react_native", name: "React Native"},
  { value:"redux", name: "Redux"},
  { value:"graphql", name: "GraphQL"},
  { value:"pathway", name: "Full Pathway"}
]

const inputListCourse = [
  { name: "auhtor", placeholder: "Course's Author", type: "text" },
  { name: "name", placeholder: "Course's Topic", type: "text" },
  { name: "description", placeholder: "Short Description", type: "text" },
  { name: "link", placeholder: "URL address", type: "url" },
  { name: "email", placeholder: "Your email address", type: "email" }
]

const selectListResource = [
  { value:"empty", name: "Please select topic"},
  { value:"job_search", name: "Job Search Links"},
  { value:"podcasts", name: "Podcast Links"},
  { value:"resources", name: "React Resources"},
  { value:"html_css", name: "HTML CSS Links"}
]

const inputListResource = [
  { name: "name", placeholder: "Resource's Name", type: "text" },
  { name: "description", placeholder: "Short Description", type: "text" },
  { name: "link", placeholder: "URL address", type: "url" },
  { name: "email", placeholder: "Your email address", type: "email" }
]

export default Recommend
