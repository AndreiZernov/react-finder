import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"


const FormSample = ({list}) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
  };

  return (
    <Form validated={validated} onSubmit={handleSubmit}>
      {list.map(form =>
        <Form.Group key={form.id} controlId={form.id}>
          <Form.Control
            required
            type={form.type}
            placeholder={form.placeholder}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      )}
      <Button style={{fontWeight: "800"}} className="btn-light px-5 btn-lg rounded-pill m-auto" type="submit">Submit form</Button>
    </Form>
  )}


export default FormSample
