import React, {useState} from 'react'
import { Modal, Button, Accordion, Card, Form } from 'react-bootstrap'
import { ListCourses, ListResources } from '../data/FormData'


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
  const [ status, setStatus ] = useState("")
  const [ validated, setValidated ] = useState(false)


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
        setTimeout(()=>onHide(), 1000);
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
      {RecommendForms.map(recForm =>

        <Card key={recForm.validation} bg="dark">
          <Card.Header>
            <Accordion.Toggle as={Card.Header} style={{cursor:"pointer"}} variant="dark" eventKey={recForm.eventKey}>
              {recForm.title}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={recForm.eventKey}>
            <Card.Body>

              <Form
                validated={validated}
                onSubmit={handleSubmit}
                action="https://formspree.io/mqkdbqby"
                method="POST"
                className="d-flex flex-column form-group px-3"
              >
                <Form.Group controlId={recForm.validation}>
                  {
                    recForm.validation === "validation3"
                    &&
                    <div className="my-1 d-inline">
                      <Form.Check required type="radio" className="d-inline" name="price" value="free"/>
                      <label className="px-2 d-inline" htmlFor="free">Free</label>
                      <Form.Check required type="radio" className="d-inline" name="price" value="paid"/>
                      <label className="px-2 d-inline" htmlFor="paid">Paid</label>
                    </div>
                  }
                  <Form.Control required as="select" custom variant="dark" name="courses" className="rounded my-1 p-2">
                    {recForm.select.map(item =>
                      <option key={item.value} value={item.value}>{item.name}</option>
                    )}
                  </Form.Control>
                  {recForm.input.map(item =>
                    <Form.Control required key={item.name} className="rounded my-1 p-2"  type={item.type} name={item.name} placeholder={item.placeholder}/>
                  )}
                  <Form.Control required key="email" className="rounded my-1 p-2"  type="email" name="email" placeholder="Your email address"/>

                  {status === "SUCCESS" ? <p className="text-success h5 my-2">Thanks!!!</p> : <Button className="btn btn-success w-100 mt-1" type="submit">Submit</Button>}
                  {status === "ERROR" && <p>Ooops! There was an error.</p>}
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Form>

            </Card.Body>
          </Accordion.Collapse>
        </Card>
      )}
    </Accordion>
  )
}


const RecommendForms = [
  { title: "ADD COURSE", validation: "validation3", select: ListCourses.selectItems, input: ListCourses.inputItems, eventKey: 1 },
  { title: "ADD RESOURCE", validation: "validation4", select: ListResources.selectItems, input: ListResources.inputItems, eventKey: 2 }
]


export default Recommend
