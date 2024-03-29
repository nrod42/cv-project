import React, { useState, useEffect, useContext } from "react";
import { SetPageInfoContext } from "../AppContext";
import uniqid from "uniqid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WorkForm = (props) => {
  const { workInfo, setWorkInfo, isEditing, setEditing, edited } =
    useContext(SetPageInfoContext);

  const [validated, setValidated] = useState(false);

  const [formInfo, setFormInfo] = useState({
    company: "",
    role: "",
    city: "",
    addrState: "",
    fromDate: "",
    toDate: "",
    description: "",
    id: uniqid(),
  });

  useEffect(() => {
    if (isEditing) {
      setFormInfo(workInfo.find((card) => card.id === edited));
    }
  }, [isEditing, workInfo, edited]);

  const handleSubmit = (e) => {
    // e.currentTarget is the form
    e.preventDefault();
    if (e.currentTarget.checkValidity() === true) {
      props.onHide();
      if (isEditing) {
        setWorkInfo((prevState) =>
          prevState.filter((work) => work.id !== edited)
        );
      }
      setWorkInfo((prev) => [...prev, formInfo]);
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
        <Form.Group as={Col} md="12">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            name="company"
            onChange={handleFormChange}
            value={formInfo.company}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid company name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="12">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            name="role"
            onChange={handleFormChange}
            value={formInfo.role}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid job title.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            onChange={handleFormChange}
            value={formInfo.city}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="addrState"
            onChange={handleFormChange}
            value={formInfo.addrState}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>From</Form.Label>
          <Form.Control
            type="date"
            name="fromDate"
            onChange={handleFormChange}
            value={formInfo.fromDate}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>To:</Form.Label>
          <Form.Control
            type="date"
            name="toDate"
            onChange={handleFormChange}
            value={formInfo.toDate}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid date.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className="mb-3">
          <Form.Label>Short Description of Responsibilities</Form.Label>
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

export default WorkForm;
