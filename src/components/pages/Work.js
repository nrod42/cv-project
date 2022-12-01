import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../../App";
import WorkCard from "../cards/WorkCard";
import WorkForm from "../forms/WorkForm";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import "bootstrap/dist/css/bootstrap.min.css";
import uniqid from "uniqid";

const Work = () => {
  const { workInfo } = useContext(SetPageInfoContext);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="page">
      <h1>Work Experience</h1>
      {workInfo.map((work) => (
        <WorkCard
          key={uniqid()}
          workInfo={work}
          showModal={() => setModalShow(true)}
        />
      ))}
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Work Experience
        </Button>

        <Modal show={modalShow} size="lg" centered>
          <Modal.Header>
            <Modal.Title>Work</Modal.Title>
            <CloseButton onClick={() => setModalShow(!modalShow)}></CloseButton>
          </Modal.Header>
          <Modal.Body>
            <WorkForm onHide={() => setModalShow(!modalShow)} />
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

export default Work;
