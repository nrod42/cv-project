import React, { useState, useContext } from "react";
import { SetListsContext } from "../../App";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import uniqid from "uniqid";

const ContactForm = (props) => {
  const { setContactInfo } = useContext(SetListsContext);

  const [validated, setValidated] = useState(false);
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    addrState: "",
    zip: "",
    phone: "",
    email: "",
    id: uniqid(),
  });

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity() === true) {
      props.onHide(false);
      setContactInfo([formInfo]);
    }
    setValidated(true);
  };

  const handleFormChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={handleFormChange}
            // defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={handleFormChange}
            // defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <Form.Label>Address:</Form.Label>
          <Form.Control
            required
            type="text"
            name="address"
            onChange={handleFormChange}
            // placeholder="First name"
            // defaultValue="Mark"
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
            placeholder="City"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            name="addrState"
            onChange={handleFormChange}
            placeholder="State"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom07">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            type="text"
            name="zip"
            onChange={handleFormChange}
            placeholder="Zip"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom08">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="text"
            name="phone"
            // placeholder="First name"
            onChange={handleFormChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom09">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            // placeholder="Last name"
            onChange={handleFormChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button variant="secondary" type="submit">
        Submit form
      </Button>
    </Form>
  );
};

export default ContactForm;
