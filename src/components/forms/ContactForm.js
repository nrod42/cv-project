import React, { useState, useEffect, useContext } from "react";
import { SetPageInfoContext } from "../AppContext";
import uniqid from "uniqid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactForm = (props) => {
  const { contactInfo, setContactInfo, isEditing, setEditing } =
    useContext(SetPageInfoContext);

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

  useEffect(() => {
    if (isEditing) {
      setFormInfo(contactInfo);
    }
  }, [isEditing, contactInfo]);

  const handleSubmit = (e) => {
    // e.currentTarget is the form
    e.preventDefault();
    if (e.currentTarget.checkValidity() === true) {
      props.onHide();
      setContactInfo((prevState) => formInfo);
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
        <Form.Group as={Col} md="6">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={handleFormChange}
            value={formInfo.firstName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid first name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={handleFormChange}
            value={formInfo.lastName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid last name.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="12">
          <Form.Label>Address:</Form.Label>
          <Form.Control
            required
            type="text"
            name="address"
            onChange={handleFormChange}
            placeholder="Address"
            value={formInfo.address}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid address.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type="text"
            name="city"
            onChange={handleFormChange}
            placeholder="City"
            value={formInfo.city}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>State</Form.Label>
          <Form.Control
            required
            type="text"
            name="addrState"
            onChange={handleFormChange}
            placeholder="State"
            value={formInfo.addrState}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Zip</Form.Label>
          <Form.Control
            required
            type="text"
            name="zip"
            onChange={handleFormChange}
            placeholder="Zip"
            value={formInfo.zip}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            required
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleFormChange}
            value={formInfo.phone}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="E-Mail"
            onChange={handleFormChange}
            value={formInfo.email}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid e-mail.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default ContactForm;
