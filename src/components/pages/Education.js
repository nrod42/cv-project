import React, { useState, useContext } from "react";
import { SetListsContext } from "../../App";
import EducationFormModal from "../modals/EducationFormModal";
import EducationCard from "../cards/EducationCard";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import uniqid from "uniqid";

const Education = () => {
  const { educationInfo } = useContext(SetListsContext);
  const [modalShow, setModalShow] = useState(false);
  const [edited, setEdited] = useState("");

  return (
    <div className="page">
      <h1>Education History</h1>
      {educationInfo.map((edu) => (
        <EducationCard
          key={uniqid()}
          educationInfo={edu}
          setEdited={setEdited}
          showModal={() => setModalShow(true)}
        />
      ))}
      <>
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          Add Education Info
        </Button>
        <EducationFormModal
          edited={edited}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </div>
  );
};

export default Education;
