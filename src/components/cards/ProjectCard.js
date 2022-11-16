import { Card, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectCard = (props) => {
  const { name, description } =
    props.projectInfo;

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

export default ProjectCard;
