import React, { useState, useContext } from "react";
import { SetListsContext } from "../../App";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WorkForm = (props) => {
  const { setWorkInfo } = useContext(SetListsContext);

  const [validated, setValidated] = useState(false);
  const [formInfo, setFormInfo] = useState({
    company: "",
    role: "",
    city: "",
    addrState: "",
    fromDate: "",
    toDate: "",
    description: "",
  });

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity() === true) {
      props.onHide(false);
      setWorkInfo((prev) => [...prev, formInfo]);
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
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            name="company"
            onChange={handleFormChange}
            value={formInfo.company}
            required
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
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
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom05">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            onChange={handleFormChange}
            value={formInfo.city}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom06">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="addrState"
            onChange={handleFormChange}
            value={formInfo.addrState}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
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
            Please provide a valid state.
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
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
      <Button variant="secondary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default WorkForm;
