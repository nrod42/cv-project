import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../../App";
import WorkCard from "../cards/WorkCard";
import FormModal from "../FormModal";
import WorkForm from "../forms/WorkForm";
import Button from "react-bootstrap/Button";
import uniqid from "uniqid";

const Work = () => {
  const { workInfo, setEditing } = useContext(SetPageInfoContext);
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => {
    setModalShow(!modalShow);
    setEditing(false);
  };

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

      <Button variant="primary" onClick={handleClose}>
        + Add Work Experience
      </Button>

      <FormModal
        modalShow={modalShow}
        handleClose={handleClose}
        title={"Education Details"}
        formType={<WorkForm onHide={() => setModalShow(!modalShow)} />}
      />
    </div>
  );
};

export default Work;
