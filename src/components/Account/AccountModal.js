import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import ProfileForm from './ProfileForm'
import YourLinks from './YourLinks'


const AccountModal = ({data, uploadedImage, list, editData}) => {
  const [ modalShow, setModalShow ] = React.useState(false)

    return (
      <>
        <Button
          className={data==="Edit" ? "py-0 rounded mb-2" :"py-2 rounded mb-2"}
          size={data==="Edit" ? "sm" : "lg"} variant={data==="Edit" ? "light" : "dark"}
          onClick={() => setModalShow(true)}
        >
          {data}
        </Button>
        <MyModal
          data={data}
          show={modalShow}
          onHide={() => setModalShow(false)}
          uploadedImage={uploadedImage}
          list={list}
          editData={editData}
        />
      </>
    )
  }


export default AccountModal


const MyModal = ({data, show, onHide, uploadedImage, list, editData}) =>
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-light text-center"
    >
      <Modal.Body className="bg-dark">
        {data === "Edit Profile" &&
          <ProfileForm list={list} uploadedImage={uploadedImage}/>
        }
        {(data === "Add Your Links" || data === "Edit") &&
          <YourLinks data={data} editData={editData} onHide={onHide}/>
        }
        <Button className="btn btn-danger mt-3" onClick={onHide}>Close</Button>
      </Modal.Body>
    </Modal>
