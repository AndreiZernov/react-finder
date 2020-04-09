import React from 'react'
import { Modal, Button } from 'react-bootstrap'


const Recommend = () => {
  const [ modalShow, setModalShow ] = React.useState(false);

  return (
    <>
      <Button variant="danger" className="position-fixed rounded" style={{top:"80%", left:"1%"}} onClick={() => setModalShow(true)}>
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
      className="text-light text-center "
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

  return (
    <form
      onSubmit={submitForm}
      action="https://formspree.io/mqkdbqby"
      method="POST"
      className="d-flex flex-column form-group px-3"
    >
      <div className="mb-1">
        <input type="radio" id="free" name="price" value="free"/>
        <label className="px-2" for="free">Free</label>
        <input type="radio" id="paid" name="price" value="paid"/>
        <label className="px-2" for="paid">Paid</label>
      </div>
      <select name="courses" className="rounded my-1 p-2" id="courses">
        {selectList.map(item =>
          <option key={item.value} value={item.value}>{item.name}</option>
        )}
      </select>
      {inputList.map(item =>
        <input key={item.name} className="rounded my-1 p-2"  type="text" name={item.name} placeholder={item.placeholder}/>
      )}
      {status === "SUCCESS" ? <p className="text-success h3 my-2">Thanks!!!</p> : <button className="btn btn-success mt-1">Submit</button>}
      {status === "ERROR" && <p>Ooops! There was an error.</p>}
    </form>
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
  { name: "auhtor", placeholder: "Course's Author" },
  { name: "name", placeholder: "Course's Topic" },
  { name: "description", placeholder: "Short Description" },
  { name: "link", placeholder: "URL address" },
  { name: "email", placeholder: "Your email address" },
]

export default Recommend
