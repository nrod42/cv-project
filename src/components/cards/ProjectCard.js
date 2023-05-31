import React, { useContext } from "react";
import { SetPageInfoContext } from "../../App";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProjectCard = (props) => {
  const { setEditing, setEdited } = useContext(SetPageInfoContext);

  const { name, description, id } = props.projectInfo;

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
            <Button variant="primary" onClick={handleEdit}>
              Edit
            </Button>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
