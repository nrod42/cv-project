import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../../App";
import EducationCard from "../cards/EducationCard";
import EducationForm from "../forms/EducationForm";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import "bootstrap/dist/css/bootstrap.min.css";
import uniqid from "uniqid";

const Education = () => {
  const { educationInfo, setEditing } = useContext(SetPageInfoContext);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(!modalShow);
    setEditing(false);
  };

  return (
    <div className="page">
      <h1>Education History</h1>
      {educationInfo.map((edu) => (
        <EducationCard
          key={uniqid()}
          educationInfo={edu}
          showModal={() => setModalShow(true)}
        />
      ))}

      <Button variant="primary" onClick={handleClose}>
        Add Education
      </Button>

      <Modal show={modalShow} size="lg" centered>
        <Modal.Header>
          <Modal.Title>Education</Modal.Title>
          <CloseButton onClick={handleClose}></CloseButton>
        </Modal.Header>
        <Modal.Body>
          <EducationForm onHide={() => setModalShow(!modalShow)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Education;
