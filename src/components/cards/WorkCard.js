import React, { useContext } from "react";
import { SetPageInfoContext } from "../AppContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WorkCard = (props) => {
  const { setEditing, setEdited } = useContext(SetPageInfoContext);

  const { company, role, city, addrState, fromDate, toDate, description, id } =
    props.workInfo;

  const handleEdit = () => {
    props.showModal();
    setEditing(true);
    setEdited(id);
  };

  return (
    <Card>
      <Card.Body className="cardBody">
        <Row>
          <Col>
            <div className="cardDataTitle">Company:</div>
            <div>{company}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="cardDataTitle">Role:</div>
            <div>{role}</div>
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
        </Row>
        <Row>
          <Col>
            <div className="cardDataTitle">From:</div>
            <div>{fromDate}</div>
          </Col>
          <Col>
            <div className="cardDataTitle">To:</div>
            <div>{toDate}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="cardDataTitle">Description:</div>
            <div>{description}</div>
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
};

export default WorkCard;
