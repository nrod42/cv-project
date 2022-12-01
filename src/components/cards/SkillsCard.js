import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const SkillsCard = (props) => {
  const { skills } = props.skills;

  return (
    <Card style={{ width: "350px" }}>
      <Card.Body className="cardBody">
        <Row>
          <Col>
            <div className="cardDataTitle">Skills:</div>
            <div>{skills}</div>
          </Col>
        </Row>
        <Row>
          <div className="d-flex justify-content-center">
            <Button variant="primary" onClick={props.showModal}>
              Edit
            </Button>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SkillsCard;
