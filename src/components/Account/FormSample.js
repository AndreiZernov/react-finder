import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"


const FormSample = ({list, uploadedImage}) => {
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

    const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const {current} = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
          current.src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  };


  return (
    <Form validated={validated} onSubmit={handleSubmit}>
      {list.map(form =>
        <Form.Group key={form.id} controlId={form.id}>
          <Form.Control
            required
            type={form.type}
            placeholder={form.placeholder}
            accept={form.type === "file" ? "image/*" : undefined }
            multiple={form.type === "file" && false}
            onChange={form.type === "file" ? handleImageUpload : undefined}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      )}
      <Button style={{fontWeight: "800"}} className="btn-success px-5 btn-lg rounded-pill m-auto" type="submit">Submit form</Button>
    </Form>
  )}


export default FormSample
