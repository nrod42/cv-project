import React, { useState, useContext } from "react";
import { SetListsContext } from "../../App";
import WorkFormModal from "../modals/WorkFormModal";
import WorkCard from "../cards/WorkCard";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import uniqid from "uniqid";

const Work = () => {
  const { workInfo } = useContext(SetListsContext);
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="page">
      <h1>Work History</h1>
      {workInfo.map((work) => (
        <WorkCard
          key={uniqid()}
          workInfo={work}
          showModal={() => setModalShow(true)}
        />
      ))}
      <>
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          Add Work Info
        </Button>
        <WorkFormModal show={modalShow} onHide={() => setModalShow(false)} />
      </>
    </div>
  );
};

export default Work;
