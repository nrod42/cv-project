import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../../App";
import SkillsCard from "../cards/SkillsCard";
import SkillsForm from "../forms/SkillsForm";
import uniqid from "uniqid";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";

const Skills = () => {
  const { skills, setEditing } = useContext(SetPageInfoContext);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(!modalShow);
    setEditing(false);
  };

  return (
    <div className="page">
      <h1>Skills</h1>
      {skills.map((skill) => (
        <SkillsCard
          key={uniqid()}
          skills={skill}
          showModal={() => setModalShow(true)}
        />
      ))}

      <Button variant="primary" onClick={handleClose}>
        Add Skills
      </Button>

      <Modal show={modalShow} size="lg" centered>
        <Modal.Header>
          <Modal.Title>Skills</Modal.Title>
          <CloseButton onClick={handleClose}></CloseButton>
        </Modal.Header>
        <Modal.Body>
          <SkillsForm onHide={() => setModalShow(!modalShow)} />
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

export default Skills;
