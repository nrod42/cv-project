import React, { useState, useContext, useEffect } from "react";
import { SetPageInfoContext } from "../../App";
import uniqid from "uniqid";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectForm = (props) => {
  const { setProjectInfo } = useContext(SetPageInfoContext);

  const [validated, setValidated] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: "",
    description: "",
    id: uniqid(),
  });

//   useEffect(() => {
//     if (props.edited !== undefined) {
//       setFormInfo(props.edited);
//     }
//   }, [props.edited]);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity() === true) {
      props.onHide(false);
      setProjectInfo((prev) => [...prev, formInfo]);
    }
    setValidated(true);
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
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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

      <Button variant="secondary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default ProjectForm;
