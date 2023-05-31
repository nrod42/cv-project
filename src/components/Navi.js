import React, { useContext } from "react";
import { SetPageInfoContext } from "../App";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import uniqid from "uniqid";

const Navi = () => {
  const { activeKey, setActiveKey } = useContext(SetPageInfoContext);

  const tabs = [
    { name: "home", path: "/cv-project" },
    { name: "contact", path: "/cv-project/contact-info" },
    { name: "education", path: "/cv-project/education-history" },
    { name: "work", path: "/cv-project/work-history" },
    { name: "projects", path: "/cv-project/projects" },
    { name: "skills", path: "/cv-project/skills" },
    { name: "review", path: "/cv-project/review" },
  ];

  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand>Resume Creator</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="pills" activeKey={activeKey}>
            {tabs.map((tab) => {
              return (
                <Nav.Link
                  key={uniqid()}
                  as={Link}
                  to={tab.path}
                  eventKey={tab.name}
                  onClick={() => setActiveKey(tab.name)}
                  style={activeKey === tab.name ? { color: "white" } : null}
                >
                  {`${tab.name[0].toUpperCase()}${tab.name.slice(1)}`}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navi;
