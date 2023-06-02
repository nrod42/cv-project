import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../AppContext";
import SkillsCard from "../cards/SkillsCard";
import FormModal from "../FormModal";
import SkillsForm from "../forms/SkillsForm";
import Button from "react-bootstrap/Button";

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

      <SkillsCard skills={skills} showModal={() => setModalShow(true)} />

      <Button
        variant="light"
        onClick={handleClose}
        style={Object.keys(skills).length !== 0 ? { display: "none" } : null}
      >
        + Add Skills
      </Button>

      <FormModal
        modalShow={modalShow}
        handleClose={handleClose}
        title={"Skills"}
        formType={<SkillsForm onHide={() => setModalShow(!modalShow)} />}
      />
    </div>
  );
};

export default Skills;
