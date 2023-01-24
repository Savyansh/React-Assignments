import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalEx(props) {
  console.log(props.detail);
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.detail.fname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="image">
          <img src={props.detail.img} alt="" />
        </div>

        <p>
          <b>Email: </b> {props.detail.email}
        </p>
        <p>
          <b>Ph No: </b> {props.detail.phNo}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEx;
