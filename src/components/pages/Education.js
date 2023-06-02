import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../AppContext";
import EducationCard from "../cards/EducationCard";
import FormModal from "../FormModal";
import EducationForm from "../forms/EducationForm";
import Button from "react-bootstrap/Button";
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
        + Add Education
      </Button>

      <FormModal
        modalShow={modalShow}
        handleClose={handleClose}
        title={"Education Details"}
        formType={<EducationForm onHide={() => setModalShow(!modalShow)} />}
      />
    </div>
  );
};

export default Education;
