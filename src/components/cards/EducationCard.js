import React, { useState, useContext} from 'react';
import { SetPageInfoContext } from "../../App";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const EducationCard = (props) => {
  const { school, degree, fromDate, toDate, id } = props.educationInfo;

  const { educationInfo } = useContext(SetPageInfoContext);
  const [isEditing, setEditing] = useState(false)

  const handleEdit = () => {
    props.showModal();
    setEditing(!isEditing);

  };

  // This is the edited obj:
  // educationInfo.find((card) => card.id === id)
  // We need to somehow pass this to the form


  return (
    <Card style={{ width: "350px" }}>
      <Card.Body className="cardBody">
        <Row>
          <Col>
            <div className="cardDataTitle">University / School:</div>
            <div>{school}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="cardDataTitle">Degree:</div>
            <div>{degree}</div>
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
          <div className="d-flex justify-content-center">
            <Button variant="primary" onClick={handleEdit}>
              Edit {id}
            </Button>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

// If THIS edit button is clicked, find that cards info in edu array, 
// pass it to the form along with editing status. 
// then if editing is active, inside of the form, when form is submitted,
// set editing inactive and find and replace that card (based on id) with newly created one.  


export default EducationCard;
