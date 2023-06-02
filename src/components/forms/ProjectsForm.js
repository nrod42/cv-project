import React, { useState, useEffect, useContext } from "react";
import { SetPageInfoContext } from "../AppContext";
import uniqid from "uniqid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProjectForm = (props) => {
  const { projectInfo, setProjectInfo, isEditing, setEditing, edited } =
    useContext(SetPageInfoContext);

  const [validated, setValidated] = useState(false);

  const [formInfo, setFormInfo] = useState({
    name: "",
    description: "",
    id: uniqid(),
  });

  useEffect(() => {
    if (isEditing) {
      setFormInfo(projectInfo.find((card) => card.id === edited));
    }
  }, [isEditing, projectInfo, edited]);

  const handleSubmit = (e) => {
    // e.currentTarget is the form
    e.preventDefault();
    if (e.currentTarget.checkValidity() === true) {
      props.onHide();
      if (isEditing) {
        setProjectInfo((prevState) =>
          prevState.filter((project) => project.id !== edited)
        );
      }
      setProjectInfo((prev) => [...prev, formInfo]);
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
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleFormChange}
            value={formInfo.name}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a project name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group className="mb-3">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            onChange={handleFormChange}
            value={formInfo.description}
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default ProjectForm;
