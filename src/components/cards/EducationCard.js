import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EducationCard = (props) => {
  const { school, degree, fromDate, toDate } = props.educationInfo;

  const handleEdit = () => {
    props.showModal();
    props.setEdited(props.educationInfo);
  };

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
            <Button variant="secondary" onClick={handleEdit}>
              Edit
            </Button>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EducationCard;
