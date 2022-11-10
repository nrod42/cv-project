import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const Navi = () => {
  return (
    <Nav variant="pills" defaultActiveKey="home">
      <Nav.Item>
        <Nav.Link as={Link} to={"/"} eventKey="home" className="text-white">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to={"/contact-info"}
          eventKey="contact"
          className="text-white"
        >
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to={"/education-history"}
          eventKey="education"
          className="text-white"
        >
          Education
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to={"/work-history"}
          eventKey="work"
          className="text-white"
        >
          Work
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to={"/review"}
          eventKey="review"
          className="text-white"
        >
          Review
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navi;
