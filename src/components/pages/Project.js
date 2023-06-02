import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../AppContext";
import ProjectCard from "../cards/ProjectCard";
import FormModal from "../FormModal";
import ProjectsForm from "../forms/ProjectsForm";
import Button from "react-bootstrap/Button";
import uniqid from "uniqid";

const Projects = () => {
  const { projectInfo, setEditing } = useContext(SetPageInfoContext);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(!modalShow);
    setEditing(false);
  };

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
      <Button variant="primary" onClick={handleClose}>
        + Add Project
      </Button>

      <FormModal
        modalShow={modalShow}
        setModalShow={setModalShow}
        handleClose={handleClose}
        title={"Project Details"}
        formType={<ProjectsForm onHide={() => setModalShow(!modalShow)} />}
      />
    </div>
  );
};

export default Projects;
