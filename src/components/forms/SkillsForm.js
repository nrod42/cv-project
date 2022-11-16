import React, { useState, useContext, useEffect } from "react";
import { SetPageInfoContext } from "../../App";
import uniqid from "uniqid";
import { Form, Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SkillsForm = (props) => {
  const { setSkills } = useContext(SetPageInfoContext);

  const [validated, setValidated] = useState(false);
  const [formInfo, setFormInfo] = useState({
    skills: "",
    id: uniqid(),
  });

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity() === true) {
      props.onHide(false);
      setSkills((prev) => [...prev, formInfo]);
    }
    setValidated(true);
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

      <Button variant="secondary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default SkillsForm;
