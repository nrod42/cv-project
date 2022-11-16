import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../../App";
import ProjectFormModal from "../modals/ProjectFormModal";
import ProjectCard from "../cards/ProjectCard";
import uniqid from "uniqid";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          Add Project
        </Button>
        <ProjectFormModal show={modalShow} onHide={() => setModalShow(false)} />
      </>
    </div>
  );
};

export default Projects;
