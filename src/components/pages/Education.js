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
  const { educationInfo } = useContext(SetPageInfoContext);
  const [modalShow, setModalShow] = useState(false);

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

      <Button variant="primary" onClick={() => setModalShow(!modalShow)}>
        Add Education
      </Button>

      <Modal show={modalShow} size="lg" centered>
        <Modal.Header>
          <Modal.Title>Education</Modal.Title>
          <CloseButton onClick={() => setModalShow(!modalShow)}></CloseButton>
        </Modal.Header>
        <Modal.Body>
          <EducationForm onHide={() => setModalShow(!modalShow)} 
          // edited={ make  a state which has the edited id. 
          // Then, pass along the id and editing status to the form.
          // In form, make the values equal to the obj with the matching id
          // Lastly, when submit is hit, if editing status is true, set false and override the found obj with this one}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setModalShow(!modalShow)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Education;
