import React, { useState, useEffect, useContext } from "react";
import { SetPageInfoContext } from "../../App";
import uniqid from "uniqid";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EducationForm = (props) => {
  const { educationInfo, setEducationInfo, isEditing, setEditing, edited } =
    useContext(SetPageInfoContext);

  const [validated, setValidated] = useState(false);

  const [formInfo, setFormInfo] = useState({
    school: "",
    degree: "",
    fromDate: "",
    toDate: "",
    id: uniqid(),
  });

  useEffect(() => {
    if (isEditing) {
      setFormInfo(educationInfo.find((edu) => edu.id === edited));
    }
  }, [isEditing, educationInfo, edited]);

  const handleSubmit = (e) => {
    // e.currentTarget is the form
    e.preventDefault();
    if (e.currentTarget.checkValidity() === true) {
      props.onHide();
      if (isEditing) {
        setEducationInfo((prevState) =>
          prevState.filter((edu) => edu.id !== edited)
        );
      }
      setEducationInfo((prev) => [...prev, formInfo]);
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
