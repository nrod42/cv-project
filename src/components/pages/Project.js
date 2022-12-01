import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../../App";
import ProjectCard from "../cards/ProjectCard";
import ProjectsForm from "../forms/ProjectsForm";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import "bootstrap/dist/css/bootstrap.min.css";
import uniqid from "uniqid";

const Projects = () => {
  const { projectInfo } = useContext(SetPageInfoContext);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="page">
      <h1>Projects</h1>
      {projectInfo.map((project) => (
        <ProjectCard
          key={uniqid()}
          projectInfo={project}
          showModal={() => setModalShow(true)}
        />
      ))}
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Project
        </Button>

        <Modal show={modalShow} size="lg" centered>
          <Modal.Header>
            <Modal.Title>Projects</Modal.Title>
            <CloseButton onClick={() => setModalShow(!modalShow)}></CloseButton>
          </Modal.Header>
          <Modal.Body>
            <ProjectsForm onHide={() => setModalShow(!modalShow)} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={() => setModalShow(!modalShow)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default Projects;
