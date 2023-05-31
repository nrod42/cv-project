import React, { useContext } from "react";
import { SetPageInfoContext } from "../../App";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactCard = ({ contactInfo, showModal }) => {
  const { setEditing, setEdited } = useContext(SetPageInfoContext);

  const {
    firstName,
    lastName,
    address,
    city,
    addrState,
    zip,
    phone,
    email,
    id,
  } = contactInfo;

  const handleEdit = () => {
    showModal();
    setEditing(true);
    setEdited(id);
  };

  if (firstName) {
    return (
      <Card>
        <Card.Body className="cardBody">
          <Row>
            <Col>
              <div className="cardDataTitle">First Name:</div>
              <div>{firstName}</div>
            </Col>
            <Col>
              <div className="cardDataTitle">Last Name:</div>
              <div>{lastName}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="cardDataTitle">Address:</div>
              <div>{address}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="cardDataTitle">City:</div>
              <div>{city}</div>
            </Col>
            <Col>
              <div className="cardDataTitle">State:</div>
              <div>{addrState}</div>
            </Col>
            <Col>
              <div className="cardDataTitle">Zip:</div>
              <div>{zip}</div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="cardDataTitle">Phone:</div>
              <div>{phone}</div>
            </Col>
            <Col>
              <div className="cardDataTitle">E-mail:</div>
              <div>{email}</div>
            </Col>
          </Row>
          <Row>
            <div className="d-flex justify-content-center">
              <Button variant="primary" onClick={handleEdit}>
                Edit
              </Button>
            </div>
          </Row>
        </Card.Body>
      </Card>
    );
  }
};

export default ContactCard;
