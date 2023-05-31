import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";

const FormModal = ({ modalShow, handleClose, title, formType }) => {
  return (
    <Modal show={modalShow} size="lg" centered>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
        <CloseButton onClick={handleClose}></CloseButton>
      </Modal.Header>
      <Modal.Body>{formType}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default FormModal;
