import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../../App";
import SkillsModal from "../modals/SkillsModal";
import SkillsCard from "../cards/SkillsCard";
import uniqid from "uniqid";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
  const { skills } = useContext(SetPageInfoContext);
  const [modalShow, setModalShow] = useState(false);

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
      <>
        <Button variant="secondary" onClick={() => setModalShow(true)}>
          Add Skills
        </Button>
        <SkillsModal show={modalShow} onHide={() => setModalShow(false)} />
      </>
    </div>
  );
};

export default Skills;
