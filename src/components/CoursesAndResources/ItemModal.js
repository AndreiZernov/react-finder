import React from "react";
import { Modal, Button, Badge } from "react-bootstrap";

const ItemModal = ({ data, func }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button
        variant="secondary"
        size="sm"
        className="px-2 rounded py-2 mb-2"
        onClick={() => setModalShow(true)}
      >
        Learn More
      </Button>
      <MyModal
        data={typeof data === "string" ? func(data) : data}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ItemModal;

const MyModal = ({ data, show, onHide }) => (
  <Modal
    show={show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className="text-light text-center"
  >
    <Modal.Body className="bg-dark">
      {data.hasOwnProperty("price") && (
        <Badge
          className="m-1 mr-auto"
          variant={
            data.price.toLowerCase().includes("free") ? "danger" : "light"
          }
        >
          {data.price}
        </Badge>
      )}
      <h4>{data.name}</h4>
      <Badge className="m-1" variant="secondary">
        {data.duration}
      </Badge>
      <p>{data.description}</p>
      <Button className="btn btn-light mr-3" onClick={onHide}>
        Close
      </Button>
      <Button
        onClick={() => window.open(data.link, "_blank")}
        className="btn btn-light"
      >
        Link
      </Button>
    </Modal.Body>
  </Modal>
);
