import React, { useContext } from "react";
import { SetPageInfoContext } from "../AppContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SkillsCard = (props) => {
  const { setEditing, setEdited } = useContext(SetPageInfoContext);

  const { skills, id } = props.skills;

  const handleEdit = () => {
    props.showModal();
    setEditing(true);
    setEdited(id);
  };

  if (skills) {
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
              <Button variant="light" onClick={handleEdit}>
                Edit
              </Button>
            </div>
          </Row>
        </Card.Body>
      </Card>
    );
  }
};

export default SkillsCard;
