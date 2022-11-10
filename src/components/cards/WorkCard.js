import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WorkCard = (props) => {
  const { company, role, city, addrState, fromDate, toDate, description } =
    props.workInfo;

  return (
    <Card style={{ width: "350px" }}>
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
            <div className="cardDataTitle">Desciption:</div>
            <div>{description}</div>
          </Col>
        </Row>
        <Row>
          <div className="d-flex justify-content-center">
            <Button variant="secondary" onClick={props.showModal}>
              Edit
            </Button>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default WorkCard;
