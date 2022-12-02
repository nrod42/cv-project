import React, { useState, useEffect, useContext } from "react";
import { SetPageInfoContext } from "../../App";
import uniqid from "uniqid";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const SkillsForm = (props) => {
  const { skills, setSkills, isEditing, setEditing, edited } =
    useContext(SetPageInfoContext);

  const [validated, setValidated] = useState(false);

  const [formInfo, setFormInfo] = useState({
    skills: "",
    id: uniqid(),
  });

  useEffect(() => {
    if (isEditing) {
      setFormInfo(skills.find((skill) => skill.id === edited));
    }
  }, [isEditing, skills, edited]);

  const handleSubmit = (e) => {
    // e.currentTarget is the form
    e.preventDefault();
    if (e.currentTarget.checkValidity() === true) {
      props.onHide();
      if (isEditing) {
        setSkills((prevState) =>
          prevState.filter((skill) => skill.id !== edited)
        );
      }
      setSkills((prev) => [...prev, formInfo]);
    }
    setValidated(true);
    setEditing(false);
  };

  const handleFormChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Skills</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="skills"
            onChange={handleFormChange}
            value={formInfo.skills}
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default SkillsForm;
