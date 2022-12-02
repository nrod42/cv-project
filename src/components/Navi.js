import React, { useContext } from "react";
import { SetPageInfoContext } from "../App";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
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
    <Navbar
      sticky="top"
      className="bg-white shadow-sm mb-3 ps-3 pe-3"
      style={{ overflowX: "auto" }}
    >
      <div className="me-4 fs-4">Resume Creator</div>
      <Nav className="me-auto" variant="pills" activeKey={activeKey}>
        {tabs.map((tab) => {
          return (
            <Nav.Item key={uniqid()}>
              <Nav.Link
                as={Link}
                to={tab.path}
                eventKey={tab.name}
                onClick={() => setActiveKey(tab.name)}
                style={activeKey === tab.name ? { color: "white" } : {}}
              >
                {`${tab.name[0].toUpperCase()}${tab.name.slice(1)}`}
              </Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </Navbar>
  );
};

export default Navi;