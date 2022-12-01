import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectCard = (props) => {
  const { name, description } = props.projectInfo;

  return (
    <Card style={{ width: "350px" }}>
      <Card.Body className="cardBody">
        <Row>
          <Col>
            <div className="cardDataTitle">Project Name:</div>
            <div>{name}</div>
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
            <Button variant="primary" onClick={props.showModal}>
              Edit
            </Button>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
