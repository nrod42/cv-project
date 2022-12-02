import React, { useState, useContext } from "react";
import { SetPageInfoContext } from "../../App";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import uniqid from "uniqid";

const EducationForm = (props) => {
  const { setEducationInfo } = useContext(SetPageInfoContext);

  const [validated, setValidated] = useState(false);
  const [formInfo, setFormInfo] = useState({
    school: "",
    degree: "",
    fromDate: "",
    toDate: "",
    id: uniqid(),
  });

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity() === true) {
      props.onHide(false);
      setEducationInfo((prev) => [...prev, formInfo]);
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
          <Form.Label>University / School</Form.Label>
          <Form.Control
            type="text"
            name="school"
            onChange={handleFormChange}
            value={formInfo.school}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Degree</Form.Label>
          <Form.Control
            type="text"
            name="degree"
            onChange={handleFormChange}
            value={formInfo.degree}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom06">
          <Form.Label>From</Form.Label>
          <Form.Control
            type="date"
            name="fromDate"
            onChange={handleFormChange}
            value={formInfo.fromDate}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom07">
          <Form.Label>To:</Form.Label>
          <Form.Control
            type="date"
            name="toDate"
            onChange={handleFormChange}
            value={formInfo.toDate}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default EducationForm;
